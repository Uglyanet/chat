import React, { PureComponent } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import '../../scss/style.scss';
import soundFile from '../../audio/sendfly.mp3';
import { SERVER_ENDPOINT } from '../../constants/other'

let socket;

class Chat extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: '',
      users: '',
      message: '',
      messages: []
    }
  }

  componentDidMount() {
    const { messages } = this.state;
    const { location } = this.props;
    socket = io(SERVER_ENDPOINT);
    socket.on('message', (message) => {
      this.setState({ messages: [...messages, message] })
    });

    socket.on('roomData', ({ users }) => {
      this.setState({ users: users })
    })
    const { name, room } = queryString.parse(location.search);
    this.setState({ room: room })
    this.setState({ name: name })
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { message, messages } = this.state;
    const { location } = this.props;
    if (prevState.message !== message) {
      socket.on('message', (message) => {
        this.setState({ messages: [...messages, message] })
      });

      socket.on('roomData', ({ users }) => {
        this.setState({ users: users })
      })
    }
    if (prevProps.location.search !== location.search) {
      const { name, room } = queryString.parse(location.search);

      socket = io(SERVER_ENDPOINT);
      this.setState({ room: room })
      this.setState({ name: name })
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }

  componentWillUnmount() {
    socket.emit('disconnect');
    socket.off();
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value })
  }

  soundClick = () => {
    const audio = new Audio();
    audio.src = soundFile;
    audio.autoplay = true;
  }

  sendMessage = () => {
    const { message } = this.state;
    this.soundClick();

    if (message) {
      socket.emit('sendMessage', message, () => this.handleChange({ name: 'message', value: '' }));
    }
  }

  render() {
    const { room, message, name, messages, users } = this.state
    return (
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={this.handleChange} name='message' sendMessage={this.sendMessage} />
        </div>
        <TextContainer users={users} room={room} />
      </div>
    )
  }
}

export default Chat;
import React, { PureComponent } from 'react';
import '../../../scss/style.scss';
import ReactEmoji from 'react-emoji';

class Message extends PureComponent {

  constructor(props) {
    super(props);
    const { user } = this.props.message;
    this.state = {
      time: '',
      isSentByCurrentUser: '',
      trimmedName: user.trim().toLowerCase()
    }
  }

  componentDidMount() {
    const { name } = this.props;
    const { trimmedName } = this.state;
    if (name.trim().toLowerCase() === trimmedName) {
      this.setState({ isSentByCurrentUser: true })
    }
  }

  componentDidUpdate() {
    const { name } = this.props;
    const { trimmedName } = this.state;
    if (name.trim().toLowerCase() === trimmedName) {
      this.setState({ isSentByCurrentUser: true })
    }
    this.setState({ time: '' });
    const date = new Date();
    const now = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
    this.setState({ time: now });
  }

  render() {
    const { isSentByCurrentUser, trimmedName, time } = this.state;
    const { text, user } = this.props.message;

    return (
      isSentByCurrentUser
        ? (
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{time}</p>
            <div className="messageBox backgroundBlue">
              <p className="trimmedName">{trimmedName}</p>
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="user">{user}</p>
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{time}</p>
          </div>
        )
    )
  }
}

export default Message;
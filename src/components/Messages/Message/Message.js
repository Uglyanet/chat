import React, { PureComponent } from 'react';
import '../../../scss/style.scss';
import { withTranslation } from 'react-i18next';
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

  translateAdminMessage=()=>{
    const {t, message} = this.props;
    const { type, text } = message;
    if(type==='WELCOME'){
      const userName = text.replace(', welcome to room .','')
      return t('WELCOME',{user:userName } )
    }
    if(type==='JOINED'){
      const userName = text.replace(' has joined!','')
      return t('JOINED',{user:userName } )
    }
    if(type==='LEFT'){
      const userName = text.replace(' has left!','')
      return t('LEFT',{user:userName } )
    }
  }

  getAnotherMessage = () => {
    const { message } = this.props
    const { time } = this.state;
    const { user, text } = message;
    if (user === 'Admin') {
      return (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="user">{user}</p>
            <p className="messageText colorDark">{ReactEmoji.emojify(this.translateAdminMessage())}</p>
          </div>
          <p className="sentText pl-10 ">{time}</p>
        </div>
      )
    }
    return (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="user">{message.user}</p>
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10 ">{time}</p>
      </div>
    )
  }

  render() {
    const { isSentByCurrentUser, trimmedName, time } = this.state;
    const { text } = this.props.message;

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

          this.getAnotherMessage()

        )
    )
  }
}

export default withTranslation()(Message);
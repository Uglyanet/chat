import React, { PureComponent } from 'react';
import InviteForm from '../InviteForm/InviteForm';
import ReferalLink from '../ReferalLink/ReferalLink';
import { withTranslation } from 'react-i18next'
import ScrollToBottom from 'react-scroll-to-bottom';

import onlineIcon from '../../icons/onlineIcon.png';

import '../../scss/style.scss';

class TextContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inviteStatus: '1',
      friendName: ''
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value })
  }

  handleChangeInviteStatus = (e) => {
    const { name, value } = e.target;
    this.handleChange({ name, value })
  }


  render() {
    const { users, room, t } = this.props;
    const { friendName, inviteStatus } = this.state
    return (
      <div className="textContainer" id='textContainer'>
        {
          users
            ? (
              <>
                <h1>{t('textcontainer_h1_people_currently_chatting')}</h1>
                <ScrollToBottom mode='top' className="activeContainer">
                  {users.map(({ name }) => (
                    <div key={name} className="activeItem">
                      <h2>
                        {name}
                      </h2>
                      <img alt="Online Icon" src={onlineIcon} />
                    </div>
                  ))}
                </ScrollToBottom>
              </>
            )
            : null
        }
        <div>
          {inviteStatus === '1'
            && <button
              className="button"
              name='inviteStatus'
              value='2'
              onClick={this.handleChangeInviteStatus}
            >
              {t('invite_friend_to_chat')}
            </button>
          }
          {inviteStatus === '2' &&
            <InviteForm friendName={friendName}
              onChange={this.handleChange}
            />
          }
          {inviteStatus === '3' && <ReferalLink
            friendName={friendName}
            onChange={this.handleChange}
            room={room} />}
        </div>
      </div>
    )
  }
}
export default withTranslation()(TextContainer);
import React, { PureComponent } from 'react';
import InviteForm from '../InviteForm/InviteForm';
import ReferalLink from '../ReferalLink/ReferalLink';

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
    const { users, room } = this.props;
    const { friendName, inviteStatus } = this.state
    return (
      <div className="textContainer">
        {
          users
            ? (
              <div>
                <h1>People currently chatting:</h1>
                <div className="activeContainer">
                  <h2>
                    {users.map(({ name }) => (
                      <div key={name} className="activeItem">
                        {name}
                        <img alt="Online Icon" src={onlineIcon} />
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            )
            : null
        }
        <div>
          {inviteStatus === '1' && <button className="button" name='inviteStatus' value='2' onClick={this.handleChangeInviteStatus}>Invite friend to chat</button>}
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
export default TextContainer;
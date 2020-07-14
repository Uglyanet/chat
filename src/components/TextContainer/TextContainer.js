import React, { useState } from 'react';
import InviteForm from '../InviteForm/InviteForm';
import ReferalLink from '../ReferalLink/ReferalLink';

import onlineIcon from '../../icons/onlineIcon.png';

import '../../scss/style.scss';

const TextContainer = ({ users, room }) => {
  const [inviteStatus, setInviteStatus] = useState('1');
  const [friendName, setFriendName] = useState('');

  const handleSetInviteStatus = () => {
    setInviteStatus('2')
  }

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
        {inviteStatus === '1' && <button className="button" onClick={handleSetInviteStatus}>Invite friend to chat</button>}
        {inviteStatus === '2' &&
          <InviteForm friendName={friendName}
            setFriendName={setFriendName}
            setInviteStatus={setInviteStatus}
          />
        }
        {inviteStatus === '3' && <ReferalLink
          friendName={friendName}
          setInviteStatus={setInviteStatus}
          setFriendName={setFriendName}
          room={room} />}
      </div>
    </div>
  )
};

export default TextContainer;
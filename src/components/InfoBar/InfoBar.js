import React, { PureComponent } from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import '../../scss/style.scss';

class InfoBar extends PureComponent {
  render() {
    const { room } = this.props;
    return (
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          {room.length === 32 && <h3>Secret pigeon chat</h3>}
          {room.length !== 32 && <h3>{room}</h3>}
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
    )
  }
}

export default InfoBar;
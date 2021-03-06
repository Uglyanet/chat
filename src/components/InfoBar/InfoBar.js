import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next'
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import '../../scss/style.scss';

class InfoBar extends PureComponent {
  scrollToTextContainer = () => {
    const textContainer = window.document.getElementById('textContainer')
    const topTextContsiner = textContainer.getBoundingClientRect().top;
    window.scrollTo({ top: topTextContsiner, behavior: 'smooth' })
  }
  render() {
    const { room, t } = this.props;
    return (
      <div className="infoBar">
        <div
          className="leftInnerContainer"
          onClick={this.scrollToTextContainer}
        >
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          {room.length === 32 && <h3>{t('infobar_img_secret_pigeon_chat')}</h3>}
          {room.length !== 32 && <h3>{room}</h3>}
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
    )
  }
}

export default withTranslation()(InfoBar);
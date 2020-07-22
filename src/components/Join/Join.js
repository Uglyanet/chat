import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import soundFile from '../../audio/kurlik.mp3';
import golubfront from '../../icons/golubfront.gif';
import securityIcon from '../../icons/security.png';
import { charset } from '../../constants/other'
import '../../scss/style.scss';
import { withTranslation } from 'react-i18next'

class Join extends PureComponent {
    state = {
        name: '',
        room: '',
        value: true,
    }

    generatePassword = () => {
        let length = 32;
        let retVal = ''
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        this.setState({ room: retVal });
    }
    soundMain = () => {
        var audio = new Audio();
        audio.src = soundFile;
        audio.autoplay = true;
    }

    handleGeneratePrivateRoom = () => {
        this.props.setSecret({ name: 'secret', value: true });
        this.generatePassword();
    }

    setName = (e) => {
        this.setState({ name: e.target.value })
    }

    setRoom = (e) => {
        this.setState({ room: e.target.value })
    }

    render() {

        const { secret, t } = this.props;
        const { name, room } = this.state;
        return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <img src={golubfront} onClick={this.soundMain} alt="pig" />
                    <h1 className="heading">{t('join_main_string')}</h1>
                    <input placeholder={t('join_placeholder_name')} className="joinInput" type="text" onChange={this.setName} />
                    <form autoComplete="off">
                        <input
                            placeholder={t('join_placeholder_room_key')}
                            className="joinInput mt-20"
                            type={secret ? "password" : "text"}
                            value={room}
                            onChange={this.setRoom}
                            autoComplete="off"
                        />
                    </form>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : e.stopPropagation()} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">{t('join_button_sign_in')}</button>
                    </Link>
                    <button
                        className="button mt-20"
                        type="submit"
                        onClick={this.handleGeneratePrivateRoom}
                    >
                        {t('join_button_create_private_key')}
                        <img
                            className="securityIcon"
                            src={securityIcon}
                            alt="security icon"
                        />
                    </button>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Join);
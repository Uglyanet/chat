import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import soundFile from '../../audio/kurlik.mp3';
import golubfront from '../../icons/golubfront.gif';
import securityIcon from '../../icons/security.png';
import { charset } from '../../constants/other'
import '../../scss/style.scss';

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
        this.generatePassword();
        this.props.setSecret({ name: 'secret', value: true });
    }

    setName = (e) => {
        this.setState({ name: e.target.value })
    }

    setRoom = (e) => {
        this.setState({ room: e.target.value })
    }

    render() {
        const {secret} = this.props;
        const {name, room}= this.state;
        return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <img src={golubfront} onClick={this.soundMain} alt="pig" />
                    <h1 className="heading">Join</h1>
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={this.setName} />
                    </div>
                    <div>
                        <input placeholder="Room" className="joinInput mt-20" type={secret ? "password" : "text"} value={room} onChange={(e) => this.setRoom(e)} />
                    </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">Sign In</button>
                    </Link>
                    <button
                        className="button mt-20"
                        type="submit"
                        onClick={this.handleGeneratePrivateRoom}
                    >
                        Create private key
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

export default Join;
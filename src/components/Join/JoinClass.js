import React, {  PureComponent } from 'react';
import { Link } from 'react-router-dom';
import soundFile from '../../audio/kurlik.mp3';
import golubfront from '../../icons/golubfront.gif';
import securityIcon from '../../icons/security.png';
import Context from '../../Context';
import { charset } from '../../constants/other'
import '../../scss/style.scss';

class JoinClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            room : '',
            secret : '',
            value : true,
        }
    }
    generatePassword = () => {
        var length = 32,
            retVal = "";
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
        this.setState({ name: 'secret', value: true });
    }
    setName = (event) => {
        this.setState({name : event.target.value})
    }
    setRoom = (event) => {
        this.setState({room : event.target.value})
    }

    render() {
        return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <img src={golubfront} onClick={this.soundMain} alt="pig" />
                    <h1 className="heading">Join</h1>
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={(event) => this.setName(event)} />
                    </div>
                    <div>
                        <input placeholder="Room" className="joinInput mt-20" type={this.secret ? "password" : "text"} value={this.room} onChange={(event) => this.setRoom(event)} />
                    </div>
                    <Link onClick={event => (!this.name || !this.room) ? event.preventDefault() : null} to={`/chat?name=${this.name}&room=${this.room}`}>
                        <button className="button mt-20" type="submit">Sign In</button>
                    </Link>
                    <button
                        className="button mt-20"
                        type="submit"
                        onClick={this.handleGeneratePrivateRoom}
                    >
                        Create privat key
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

export default JoinClass;
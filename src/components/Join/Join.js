import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import soundFile from '../../audio/kurlik.mp3';
import golubfront from '../../icons/golubfront.gif';
import securityIcon from '../../icons/security.png';
import Context from '../../Context';

import {charset} from '../../constants/other'


import '../../scss/style.scss';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const { secret, setSecret } = useContext(Context);

    const generatePassword = () => {
        var length = 32,
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setRoom(retVal);
    }


    const soundMain = () => {
        var audio = new Audio();
        audio.src = soundFile;
        audio.autoplay = true;
    }

    const handleGeneratePrivateRoom = () => {
        generatePassword();
        setSecret(true);
    }


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <img src={golubfront} onClick={soundMain} alt="pig" />
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type={secret ? "password" : "text"} value={room} onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
                <button
                    className="button mt-20"
                    type="submit"
                    onClick={handleGeneratePrivateRoom}
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

export default Join;
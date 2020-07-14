import React from 'react';

import '../../scss/style.scss';

const ReferalLink = ({ friendName, room, setInviteStatus, setFriendName }) => {

    const location = window.location.host;

    const copy = () => {
        var copyText = document.getElementById("link");
        copyText.select();
        document.execCommand("copy");
    }

    const backButton = () => {
        setInviteStatus('1');
        setFriendName('');
    }

    const handleCopy = (e) => {
        e.preventDefault();
        copy();
    }

    return (
        <div>
            <p>Give this link to your friend</p>
            <form className="formLink">
                <div>
                    <input
                        className="linkInput"
                        id="link"
                        type="text"
                        value={`${location}/chat?name=${friendName}&room=${room}`}
                    />
                </div>
                <button
                    className="copyButton"
                    onClick={handleCopy}
                >
                    COPY
                </button>
            </form>
            <button className="button" onClick={backButton}>Back</button>
        </div>
    )
};

export default ReferalLink;
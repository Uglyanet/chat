import React from 'react';

import '../../scss/style.scss';

const Input = ({ setMessage, sendMessage, message }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ?  sendMessage(event): null}
            />
            <button className="sendButton" disabled={message === ''} onClick={(e) => {
                sendMessage(e);
            }}>Send</button>
        </form>
    )
}

export default Input;
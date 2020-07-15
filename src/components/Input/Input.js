import React, { PureComponent } from 'react';

import '../../scss/style.scss';

class Input extends PureComponent {
    handleSendMessage = () => {
        this.props.sendMessage()
    }

    handleChange = (e) => {
        const { name, setMessage } = this.props;
        setMessage({ name: name, value: e.target.value })
    }

    render() {
        const { message } = this.props;
        return (
            <div className="form">
                <input
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={this.handleChange}
                />
                <button
                    className="sendButton"
                    disabled={message === ''}
                    onClick={this.handleSendMessage}>Send</button>
            </div>
        )
    }
}

export default Input;
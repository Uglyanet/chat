import React, { PureComponent } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import '../../scss/style.scss';
import {v4 as uuidv4} from 'uuid'

class Messages extends PureComponent {
    render() {
        const { messages, name } = this.props;
        return (
            <ScrollToBottom className="messages">
                {messages.map((message, i) => <div key={uuidv4()}><Message message={message} name={name} /></div>)}
            </ScrollToBottom>
        )
    }
}

export default Messages;
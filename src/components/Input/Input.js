import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next'


import '../../scss/style.scss';

class Input extends PureComponent {
    handleSendMessage = (e) => {
        const { sendMessage, setMessage } = this.props;
        e.preventDefault();
        sendMessage();
        setMessage({ name: 'message', value: '' })
    }

    handleChange = (e) => {
        const { name, setMessage } = this.props;
        setMessage({ name: name, value: e.target.value })
    }

    render() {
        const { message, t } = this.props;
        return (
            <form className="form" onSubmit={this.handleSendMessage}>
                <input
                    className="input"
                    type="text"
                    placeholder={t('input_placeholder_type_message')}
                    value={message}
                    onChange={this.handleChange}
                />
                <button
                    className="sendButton"
                    disabled={message === ''}
                    type='submit'
                >
                    {t('input_send_button')}
                </button>
            </form>
        )
    }
}

export default withTranslation()(Input);
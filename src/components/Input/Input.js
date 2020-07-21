import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next'


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
        const { message,t} = this.props;
        return (
            <div className="form">
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
                    onClick={this.handleSendMessage}>{t('input_send_button')}</button>
            </div>
        )
    }
}

export default withTranslation()(Input);
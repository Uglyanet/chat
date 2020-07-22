import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next'

import '../../scss/style.scss';

class ReferalLink extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            location: window.location.host
        }
    }

    copy = () => {
        var copyText = document.getElementById("link");
        copyText.select();
        document.execCommand("copy");
    }

    backButton = () => {
        const { onChange } = this.props;
        onChange({ name: 'inviteStatus', value: '1' });
        onChange({ name: 'friendName', value: '' })
    }

    handleCopy = (e) => {
        e.preventDefault();
        this.copy();
    }

    render() {
        const { friendName, room, t } = this.props;
        const { location } = this.state;
        return (
            <div>
                <p>{t('referal_link_give_this_link_to_your_friend')}</p>
                <form className="formLink">
                    <input
                        className="linkInput"
                        id="link"
                        type="text"
                        value={`${location}/chat?name=${friendName}&room=${room}`}
                    />
                    <button
                        className="copyButton"
                        onClick={this.handleCopy}
                    >
                        {t('referal_link_button_copy')}
                    </button>
                </form>
                <button className="button" onClick={this.backButton}>{t('referal_link_button_back')}</button>
            </div>
        )
    }
}

export default withTranslation()(ReferalLink);
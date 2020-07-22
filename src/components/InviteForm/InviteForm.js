import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next'


import '../../scss/style.scss';

class InviteForm extends PureComponent {
    handleSetFriendName = (e) => {
        const { onChange } = this.props;
        onChange({ name: 'friendName', value: e.target.value })
    }

    handleButtonClick = (e) => {
        const { friendName, onChange } = this.props;
        e.preventDefault();
        e.stopPropagation();
        if (friendName) {
            onChange({ name: 'inviteStatus', value: '3' })
        } else {
            e.preventDefault()
        }
    }

    render() {
        const { t } = this.props;
        return (
            <form
                onSubmit={this.handleButtonClick}>
                <input
                    placeholder={t('invite_input_placeholder')}
                    className="friendInput"
                    type="text"
                    onChange={this.handleSetFriendName} />
                <button
                    className="button"
                    type='submit'
                >
                    {t('invite_button')}
                </button>
            </form>
        )
    }
}

export default withTranslation()(InviteForm);
import React, { PureComponent } from 'react';

import '../../scss/style.scss';

class InviteForm extends PureComponent {
    handleSetFriendName = (e) => {
        const { onChange } = this.props;
        onChange({ name: 'friendName', value: e.target.value })
    }

    handleButtonClick = (e) => {
        const { friendName, onChange } = this.props;
        if (friendName) {
            onChange({ name: 'inviteStatus', value: '3' })
        } else {
            e.preventDefault()
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <input
                        placeholder="Friend Name"
                        className="friendInput"
                        type="text"
                        onChange={this.handleSetFriendName} />
                </div>
                <button
                    className="button"
                    onClick={this.handleButtonClick}
                >
                    Oh nice
            </button>
            </div>
        )
    }
}

export default InviteForm;
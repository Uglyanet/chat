import React from 'react';

import '../../scss/style.scss';

const InviteForm = ({ friendName, setFriendName, setInviteStatus }) => {

    const handleSetFriendName = (e) => {
        setFriendName(e.target.value)
    }
    
    const handleButtonClick = (e) => {
        if (friendName) {
            setInviteStatus('3')
        } else {
            e.preventDefault()
        }
    }

    return (
        <div>
            <div>
                <input
                    placeholder="Friend Name"
                    className="friendInput"
                    type="text"
                    onChange={handleSetFriendName} />
            </div>
            <button
                className="button"
                onClick={handleButtonClick}
            >
                Oh nice
            </button>
        </div>
    )
};

export default InviteForm;
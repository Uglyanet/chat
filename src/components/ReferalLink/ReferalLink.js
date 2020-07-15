import React, { PureComponent } from 'react';

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
        onChange({name:'inviteStatus', value:'1'});
        onChange({name:'friendName', value:''})
    }

    handleCopy = (e) => {
        e.preventDefault();
        this.copy();
    }

    render() {
        const { friendName, room } = this.props;
        const { location } = this.state;
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
                        onClick={this.handleCopy}
                    >
                        COPY
                </button>
                </form>
                <button className="button" onClick={this.backButton}>Back</button>
            </div>
        )
    }
}

export default ReferalLink;
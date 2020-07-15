import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

class NotFound extends PureComponent{
    render(){
        return(
            <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <p className="heading">404 Page not found</p>
                <Link to="/">
                    <button className="button">HOME</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default NotFound;
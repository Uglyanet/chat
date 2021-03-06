import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat';
import NotFound from './components/NotFound/NotFound';
import Context from './Context';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            secret: false
        }
    }

    handleChange = ({ name, value }) => {
        this.setState({ [name]: value })
    }

    generateLink=(path)=>{
        return `/:lng(ru|ua|en)?${path}`;
    }

    render() {
        const { secret } = this.state;
        return (
            <Context.Provider value={{ secret, setSecret: this.handleChange }}>
                <Router>
                    <Switch>
                        <Route path={this.generateLink('/')} exact component={() => <Join secret={secret} setSecret={this.handleChange} />} />
                        <Route path={this.generateLink('/chat')} component={Chat} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Context.Provider>
        )
    }
}

export default App;
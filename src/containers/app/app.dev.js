import React, { Component } from 'react'
import { Provider } from 'react-redux';
import DevTools from './devTools';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <DevTools />
            </Provider>
        )
    }
}

export default App

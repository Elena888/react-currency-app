import React from 'react';
import Header from './components/Header'
import Currency from './components/Currency'

import './App.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Currency/>
            </div>
        );
    }
}

export default App;


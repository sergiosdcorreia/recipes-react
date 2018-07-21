import React from 'react';
import Sergio from './static/images/sergio.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Recipes App</h1>
                <img src={Sergio} />
            </div>
        );
    }
}

export default App;
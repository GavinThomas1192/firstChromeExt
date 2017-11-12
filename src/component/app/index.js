import React from 'react';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>
                    Hello world.
                </h1>
                <Button bStyle="primary">button</Button>
            </div>
        )
    }
}

export default App;
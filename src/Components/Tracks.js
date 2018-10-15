import React from 'react';
import { Consumer } from '../context.js';

class Tracks extends React.Component {
    render(){
        return(
            <Consumer>
                {value => {
                    console.log(value);
                    return <h1>Tracks</h1>
                }}
            </Consumer>
        )
    }
}

export default Tracks;
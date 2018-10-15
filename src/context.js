import React from 'react';
import axios from 'axios';
import { key } from './Components/config.js';

const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${key}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
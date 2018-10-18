import React from 'react';
import axios from 'axios';
import { key } from "./config.js";

class Lyrics extends React.Component {
    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${key}`)
        .then(res => {
            console.log(res.data)
            this.setState({ lyrics: res.data.message.body.lyrics })

            return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${key}`)
        })
        .then(res => {
            console.log(res.data)
            this.setState({ track: res.data.message.body.track })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Lyrics</h1>
            </div>
        );
    }
}

export default Lyrics;
import React from 'react';
import axios from 'axios';
import { Consumer } from '../context.js';
import { key } from './config.js';

class Search extends React.Component {
    state = {
        trackTitle: ""
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    trackSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${key}`)
        .then(res => {
            console.log(res.date);
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i> Search for a Song
                            </h1>
                            <p className="lead text-center">Get the Lyrics for any song</p>
                            <form onSubmit={this.trackSubmit}>
                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="text" placeholder="Song Title" name="trackTitle" value={this.state.trackTitle} onChange={this.onChange} />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                                    Get Lyrics
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;
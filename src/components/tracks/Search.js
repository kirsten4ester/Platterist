import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context';


class Search extends Component {
    state = {
        trackTitle: ''
    };

findTrack = (dispatch, e) => {
    e.preventDefault(); 

    axios.get( `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=3&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_MM_KEY}`) 
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            this.setState({ trackTitle: '' });
        })
        .catch(err => console.log(err));
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value }) ;
};

    render() {
        return (
            <Consumer>
                {value => {
                    // console.log(value);
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control form-control-sm" 
                                    placeholder="enter song name" 
                                    name="trackTitle"
                                    value={this.state.trackTitle}
                                    onChange={this.onChange}
                                    /> 
                                </div>
                                <button className="btn btn-dark btn-md btn-block mb-5" type="submit">
                                    spin
                                </button>
                            </form>
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default Search;

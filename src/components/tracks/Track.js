import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Track = (props) => {
    const { track } = props;
    return (
        <>
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2> 
                        {track.track_name}
                    </h2>
                    <h5>{ track.artist_name }</h5>
                    <p className="card-text">
                        <strong>Album</strong>: {track.album_name}
                        <br/>
                        <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                        <br/>
                    </p>
                    {/* button for lyrics: */}
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-secondary btn-xs btn-block">
                        Lyrics
                    </Link>
                    
                </div> 
            </div>
            
        </div>
        </>
    )
}

export default Track;
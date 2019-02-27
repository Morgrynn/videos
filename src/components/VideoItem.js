import React from 'react';
import '../styles/VideoItem.css'

const VideoItem = ({ video }) => {
    return ( 
        <div className="video-item float-right margin-top">
            <img className="image" src={video.snippet.thumbnails.medium.url} alt="thumbnail-image" />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
     );
}
 
export default VideoItem;
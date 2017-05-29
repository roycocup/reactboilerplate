import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;

  return (
    <li className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>

      </div>
    </li>
  );

}


export default VideoListItem;

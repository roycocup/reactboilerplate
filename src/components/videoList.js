import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {


  const Items = props.videos.map( (video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {Items}
    </ul>
  );
}

export default VideoList;

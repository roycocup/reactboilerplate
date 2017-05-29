import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

const APIKEY = "AIzaSyDQSULrl4MOpDWjtBzdbgayAd5UYH1K8ek";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { videos:[] }

    YTSearch(
      {key: APIKEY, term : 'Joe Rogan' },
      (videos)=>{this.setState({ videos })}
    );

  };

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

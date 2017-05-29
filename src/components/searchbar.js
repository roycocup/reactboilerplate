import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//const SearchBar = () => {
//  return <input />;
//}

class SearchBar extends Component {
  
  constructor(props){
    super(props); 
    
    this.state = {term : ''}
  }
  
  render(){
    return (
      <div>
        <input 
          value = {this.state.term}
          onChange={e => this.setState({term: e.target.value})} 
        />
      </div>
    );
  }
  
  
}

export default SearchBar;
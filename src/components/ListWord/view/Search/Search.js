import React, { Component } from 'react';
import './Search.css';

import { observer,inject } from "mobx-react";
@inject("ListWordStore")
@observer class Search extends Component {
  constructor(props){
    super(props)

  }
  handleSearch(event){
    if(event.target.value.length > 0){
      this.props.ListWordStore.filtering(event.target.value)
    }else{
      this.props.ListWordStore.getWordList()
    }
  }
  render() {
    return (
      <div className="Search">
        <input className="searching" placeholder="Search" type="text" onChange={this.handleSearch.bind(this)} />
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import './ListWord.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { observer,inject } from "mobx-react";
import Store from './store'
import Header from '../Header/Header'
import ListRow from './view/ListRow/ListRow'
import Search from './view/Search/Search'
import CloseIcon from './view/CloseIcon/CloseIcon'

import Portal from 'react-portal';
import Modal from 'react-modal';

@inject("ListWordStore")
@observer class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      permission: false,
      isOpenedModal: true
    }
  }
  componentWillMount(){
   this.props.ListWordStore.getWordList()
  }
  componentDidMount(){

  }
  handleOpenModal(){
    this.setState({isOpenedModal:true})
  }
  closeModal(){
    this.setState({isOpenedModal:false})
  }
  render() {
    return (
      <div className="listWord">
        <Header />
        <Search />
        <div className="listContent">
          {Store.wordList.map(element => (
            <ListRow id={element.id} correct={element.correct} wrong={element.correct} onPress={this.handleOpenModal.bind(this)} />
          ))}
        </div>
        <Modal className="divInModal" isOpen={this.state.isOpenedModal} onRequestClose={this.closeModal.bind(this)}>
            <div className="modalHeader">
              <div className="modalHeaderTitle"><h1>Reformation</h1></div>
              <div className="modalHeaderCloseIcon">
              </div>
            </div>
            <div className="modalContent">
            </div>
        </Modal>

      </div>
    );
  }
}
//<CloseIcon onPress={this.closeModal.bind(this)} />

/*
<Portal closeOnEsc closeOnOutsideClick isOpened={true}>
  <div className="divInPortal">
    <h5>Hi Portal</h5>
  </div>
</Portal>
*/
export default observer(App);

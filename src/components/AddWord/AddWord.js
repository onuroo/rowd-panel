import React, { Component } from 'react';
import './AddWord.css';
import firebase from 'firebase'
import firebaseConfig from '../../config/firebase'
import Header from '../Header/Header'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
firebase.initializeApp(firebaseConfig.config);

class AddWord extends Component {
  constructor(props){
    super(props)
    this.state={
      correctValue:'',
      wrongValue:'',
      status:''
    }
    this.saveWords = this.saveWords.bind(this)

  }
  componentWillMount(){
  }
  handleCorrectChange(event){
    this.setState({correctValue:event.target.value})
  }
  handleWrongChange(event){
    this.setState({wrongValue:event.target.value})

  }
  successInfo(){
    this.setState({correctValue:'',wrongValue:''})
    this.setState({status:"true"})
    setTimeout(function(){ this.setState({status:''}) }.bind(this), 2000);
  }
  saveWords(){
    var states = this.state
    firebase.database().ref().child('Words').once("value")
      .then(function(snapshot) {
        const numChildren = snapshot.numChildren()
        const wordsRef = firebase.database().ref('Words/' + numChildren ).set({
          correct: states.correctValue,
          wrong: states.wrongValue,
          id: numChildren
        });
      })
      this.successInfo()

  }
  render() {
    return (
      <div className="addWord">
        <Header />
        <div className="content">

          <div className="correctContainer">
            <p className="pCorrect">Correct</p>
            <input className="input inputCorrect" type="text" value={this.state.correctValue} onChange={this.handleCorrectChange.bind(this)} />
          </div>
          <div className="wrongContainer">
            <p className="pWrong">Wrong</p>
            <input className="input inputWrong" type="text" value={this.state.wrongValue} onChange={this.handleWrongChange.bind(this)} />
          </div>
        </div>

        <button onClick={this.saveWords} className="button" >
          <b>
            Save!
          </b>
        </button>
        {this.state.status == "true" ?
          <p className="successInfo">Succesfully added. Thanks..</p> : null
        }
        {this.state.status == "false" ?
          <p className="failInfo">Something went wrong. Sorry..</p> : null
        }


      </div>
    );
  }
}

export default AddWord;

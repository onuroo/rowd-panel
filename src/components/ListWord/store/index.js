import React, { Component } from 'react';
import {observable,computed,action} from 'mobx';
import firebase from 'firebase'
class ListWordStore {
  @observable wordList = []

  @action getWordList(){
    firebase.database().ref().child('Words').once("value")
      .then(function(snapshot) {
        return snapshot.val()
      }).then((data) => {
        this.wordList = data
      })
  }

  @action filtering(text){
    let filteredData = this.wordList.filter(function(word){
      let indexCorrect = word.correct.indexOf(text)
      let indexWrong = word.wrong.indexOf(text)
      console.log('indexCorrect: ' + indexCorrect)
      console.log('indexWrong: ' + indexWrong)

      if(indexCorrect > -1 || indexWrong > -1 ){
        return word
      }

    })

    this.wordList = filteredData

  }
}
const listWordStore = new ListWordStore()
export default listWordStore

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Animbutton from './Animbutton';
import { Animbutton } from '../common';
const { width, height } = Dimensions.get('window')
let arrnew = []

class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = this.props.quizData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    arrnew = this.shuffle(arrnew);
    this.state = {
      buttonRotation: ['bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounce', 'flash', 'jello', 'pulse', 'rotate', 'rubberBand', 'shake', 'swing', 'tada', 'wobble'],
      buttonColor: ['blue', 'green', 'blue', 'green', 'blue', 'green','blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green','blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green','blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green','blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green','blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green'],
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0,
      buttonStatus: false
    }
  }

  shuffle(array) {
    let n = array.length, i, t;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[i];
      array[i] = array[n];
      array[n] = t;
    }
    return array
  }

  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
      
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish((this.score) * 100 / arrnew.length)
     }
  }
  _answer(status,ans){
 
    if(status == true){
      const count = this.state.countCheck + 1
      this.setState({ countCheck: count })
      if(ans == this.state.correctoption ){
        this.score += 1
      } else {
        Alert.alert('Try Again :(')
      }
    } else {
      const count = this.state.countCheck - 1
      this.setState({ countCheck: count })
      // if(this.state.countCheck < 1 || ans == this.state.correctoption){
      // this.score -= 1
      // }
    }
 
  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  
        <View key={k} style={{margin:10}}> 
          <Animbutton 
            countCheck={_this.state.countCheck} 
            onColor={_this.state.buttonColor[_this.qno]} 
            effect={_this.state.buttonRotation[_this.qno]} 
            _onPress={(status) => _this._answer(status,k)} 
            text={currentOptions[k]} 
          />
        </View>
      )
    });
 
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>
 
      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
 
      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
      {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}
 
        <TouchableOpacity onPress={() => this.next()} >
          <View style={{
            paddingTop: 5,
            paddingBottom: 5, 
            paddingRight: 20, 
            paddingLeft: 20, 
            borderRadius:10, 
            backgroundColor:"blue"
          }}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
        </TouchableOpacity >
 
        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
 
  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export { Quiz }
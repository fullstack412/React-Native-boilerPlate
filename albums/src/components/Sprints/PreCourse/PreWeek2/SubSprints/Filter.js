import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';



class Filter extends Component{
  constructor(props){
      super(props)
      this.state = {
        quizData: {
          "quiz" : {
            "quiz1" : {
              "question1" : {
                "correctoption" : "option2",
                "options" : {
                  "option1" : "['Matt','Mastodon','Cat']",
                  "option2" : "['Matt','Cat']",
                  "option3" : "'Matt,Cat'"
                },
                "question" : " var string=['hello','Matt','Mastodon','Cat','Dog'];\n function match(string){\n return filter(string,function(element){\n return element.includes('at')\n  }\n};   \n console.log(match); "
                },
              "question2" : {
                "correctoption" : "option1",
                "options" : {
                    "option1" : "[2,4,6,8,10]",
                    "option2" : "'2,4,6,8,10'",
                    "option3" : "{2,4,6,8,10}"
                    
                  },
                "question" : "var number=[1,2,3,4,5,6,7,8,9,10] \n function even(number){\n return filter(number,function(num){\n return num%2 === 0\n })\n }; \n console.log(even);"
              },
              "question3" : {
                "correctoption" : "option2",
                "options" : {
                    "option1" : "'exuberant, destruction, present'",
                    "option2" : "['exuberant', 'destruction', 'present']",
                    "option3" : "['exuberant', 'destruction']"
                  },
                "question" : "var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; \n function result(words){\n return filter(words,function(string){ \n return string.length > 6 ;\n })\n };\n  console.log(result);"
              }
            }
          }      
        }
      }
      
  }
  render(){
    const topic='Filter';
    const Question='What Is Filter?';
    const Define='Filter receives the same arguments as map, and works very similarly. The only difference is that the callback needs to return either true or false. If it returns true then the array keeps that element and if it returns false the element is filtered out.';
    const function1='function filter(array,predicate ) {\n  var acc=[]\n  each(array,function(element)){\n    if(predicate(element){\n     acc.push(element) \n    }\n  })\n return acc \n};';
    const { thumbnailStyle,title,container,textContainer,thumbnailStyle1}=Styles
    
    return(
      <Card>
        <CardSection>
          <View>
            <Text style={title}>
              {topic}{"\n"}
            </Text>
          </View>
        </CardSection>
        <CardSection style={container}>
          <Image 
          style= {thumbnailStyle1}
          source={require('../../../../../assets/Pic7.png')}/>
        </CardSection>
        <CardSection style={container}>
          <Text style={{fontWeight:'bold'}}>
            {Question}{"\n"}{"\n"}
            <Text style={{fontWeight:'normal'}}>
              {Define}
            </Text>
          </Text>
        </CardSection>
        <CardSection style={container} >
          <Text style={{fontWeight:'bold',color:'#FF33A8'}}>
            {function1}
          </Text>
        </CardSection>
        <CardSection style={container}>
          <View >
            <Playquiz  quizData = { this.state.quizData }/>
          </View>
        </CardSection>
        
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Higher Order Function: Map')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>

    )
   
  }
}

const Styles=StyleSheet.create({
  container:{
    flexDirection: 'row'
},
textContainer:{
  flex: 1,
  flexWrap: 'wrap'
},
title: {
  fontSize: 19,
  fontWeight: 'bold'

},
thumbnailStyle1:{
  height: 250 ,
  width: 355
  }
    
})

export default Filter
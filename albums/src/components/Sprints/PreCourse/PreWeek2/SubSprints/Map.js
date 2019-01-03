import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class Map extends Component{
  constructor(props){
      super(props)
      this.state = {
        quizData: {
          "quiz" : {
            "quiz1" : {
              "question1" : {
                "correctoption" : "option2",
                "options" : {
                  "option1" : "[1,16,81]",
                  "option2" : "[1, 2, 3]",
                  "option3" : "'1,16,81'"
                },
                "question" : "var numbers = [1, 4, 9];\n function roots(numbers){\n return map(numbers,function(element){\n return Math.sqrt(element)\n })\n }\n console.log(roots) "
                },
              "question2" : {
                "correctoption" : "option1",
                "options" : {
                    "option1" : "[2, 3, 6, 13]",
                    "option2" : "[2,3,5,12]",
                    "option3" : "[2,2,5,12]"
                    
                  },
                "question" : "var arr = [1.5, 2.56, 5.1, 12.33];\n function rounded(arr){\n return map(arr,function(ele){\n return Math.ceil(ele)\n })\n }\n console.log(rounded);"
              },
              "question3" : {
                "correctoption" : "option1",
                "options" : {
                    "option1" : " 0\n 1\n 2\n 3\n [1,3,5,7]",
                    "option2" : " 0\n 1\n 2\n [0,1,3,5]"
                     },
                "question" : "var array = [1, 2, 3, 4];\n function test(array){\n return map(array,function(x,i){\n console.log(i)\n return x+i\n})\n}\n console.log(test)"
              },
              "question4" : {
                "correctoption" : "option1",
                "options" : {
                    "option1" : "[1, 4, 9]",
                    "option2" : "{ 'a': 1, 'b': 4, 'c': 9 } ",
                    "option3" : "{'a':1,'b':2,'c':3}"
                     },
                "question" : "var myObject = { 'a': 1, 'b': 2, 'c': 3 }\n function IterateObj(myObject){\n return map(myObject,function(value,key){\nreturn value*value\n})\n}\nconsole.log (IterateObj)"
              }
            
             
            }
          }      
        }
      }
     
  }
  render(){
    const topic='Map';
    const Difine='The map() method is used to apply a function on every element in an array.\n A new array is then returned.';
    const function1='function map(n,f){\n var acc=[]\n each(n,function(element,i){\n acc.push(f(element,i))\n })\n return acc \n };';
    const ImplementEach='Of Course, you have to declare Each() before because you will get (Each is not defined) ';
    const ImproveMap='function map(n,f){\n var acc=[]\n if(!Array.isArray(n)){\n acc={}\n  }\n each(n,function(element,key){\n acc[key]=f(element,key })\n return acc\n  }'
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
                    style= {thumbnailStyle}
                    source={require('../../../../../assets/Pic5.jpeg')}/>
                
                <Text style={textContainer} >
                    {Difine} {"\n"}{"\n"}
                </Text>
            </CardSection >
            <CardSection style={container}> 
              <Text style={{fontWeight:'bold',color:'green'}}>
                {function1}{"\n"}{"\n"}
              </Text>
              <Image
              style={{width:300,height:175}}
              source={require('../../../../../assets/Pic6.png')}/>
            </CardSection>
            <CardSection>
              <Text>
                {ImplementEach}{"\n"}{"\n"}
                To make our function works with objects also:{'\n'}{"\n"}
                <Text style={{fontWeight:'bold',color:'green'}}>
                {ImproveMap}

                </Text>
              </Text>
            </CardSection>
            <CardSection style={container}>
            <View >
              <Playquiz  quizData = { this.state.quizData }/>
            </View>
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
thumbnailStyle:{
    height: 100 ,
    width: 100
  }
  
    
})

export default Map
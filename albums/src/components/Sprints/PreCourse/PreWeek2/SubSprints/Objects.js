import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
                                                                    

class Objects extends Component{
  constructor(props){
      super(props)
        this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option2",
              "options" : {
                "option1" : "person.['name']",
                "option2" : "person.name[1]"
              },
              "question" : "If you have this object:\n var person = {\n name: ['Tal', 'Omari'],\n age: 25,\n gender: 'Female',\n interests: ['Coding', 'Dancing'] \n }\n and you want to git the value 'Omari';"
            },
            "question2" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "meow",
                  "option2" : "woof"
                },
              "question" : "var obj = {\n cat: 'meow',\n dog: 'woof'\n}; var dog = 'cat';\n var sound = obj[dog];\n console.log(sound);"
            },
            "question3" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "meow",
                  "option2" : "woof"
                },
              "question" : "var obj = {\n cat: 'meow',\n dog: 'woof'\n};\n var dog = 'cat';\n var sound = obj.dog\n console.log(sound)"
            },
            "question4" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "obj['1prop'],\n obj['prop name']",
                  "option2" : "obj.1prop,\n obj.prop name"
                },
              "question" : "what is the correct syntax from the following ?"
            },
            "question5" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "True",
                  "option2" : "False"
                },
              "question" : ""
            }
          }
        }      
      }
    }
     
  }
  render(){
    const topic= 'Objects';
    const Question='What is Object?';
    const introduction = 'Objects are variables , A JavaScript object is a collection of unordered properties';
    const CreateObj= 'Creating Objects in JavaScript';
    const DecleareObject= 'an object is made up of multiple members, each of which has a [name] and a [value],Each [name/value] pair must be separated by a (comma), and the [name and value] in each case are separated by a (colon)';
    const AccessObj= 'Accessing Object Properties:';
    const Ways='There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.'
    const FirstType='1. Access Object Properties using Dot notation(.) : is used most frequently.';
    const Example='Example for an Object: \n var person = { \n name: ["Tal", "Omari"],\n age: 25,\n gender: "Female", \n interests: ["Coding", "Dancing"] \n };'
    const SecondType='2. Access object Properties using bracket notation ([]): If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.However, you can still use bracket notation on object properties without spaces.';
    const Iterate= 'Iterating through objects: ';
    const IteratingSyntax='Like most things in JavaScript, there is certainly more than one way to iterate over an object.\n This is the syntax:\n for (variable in object) { ...\n}';
    const { thumbnailStyle,title,container,textContainer}=Styles
    
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
                    source={require('../../../../../assets/object.png')}/>
                
                <Text style={textContainer} >
                    {Question} {"\n"}{"\n"}{introduction}{"\n"}
                </Text>
            </CardSection >
            
            <CardSection style={container}>
                <Image 
                    style= {thumbnailStyle}
                    source={require('../../../../../assets/IMG_20181231_193433.png')}/>
                
                <Text style={textContainer}>
                    {CreateObj}{"\n"}{"\n"}{DecleareObject}{"\n"}
                </Text>  
            </CardSection>
            <CardSection  style={container}>
                <Text style={textContainer}>
                   <Text style={{fontWeight:'bold'}}> {AccessObj}{"\n"}{"\n"}</Text>
                    {Ways}{"\n"}{"\n"}
                    {FirstType}{"\n"}{"\n"}
                    
                
                    <Text style={{fontWeight: 'bold'}}>
                       This is the syntax: {"\n"}
                    </Text> 

                    <Text>
                    objectName.propertyName ;{"\n"}{"\n"}
                    </Text>
                   <Text style={container}>
                     {SecondType}{"\n"}{"\n"}
                   </Text>
                   <Text style={{fontWeight: 'bold'}}>
                     This is the syntax: {"\n"} 
                   </Text>
                   <Text>
                    objectName["propertyName"] ;{"\n"}{"\n"}
                    </Text>
                </Text>
                
            </CardSection>
            <CardSection style={container}>
            <Text style={{fontWeight:'bold'}}>
               {Iterate} {"\n"}
                <Text style={{fontWeight:'normal'}}>
              {IteratingSyntax}
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
    fontWeight: 'bold',
    
   },
    thumbnailStyle: {
        height: 100,
        width: 100
      
        
      }

})

export default Objects
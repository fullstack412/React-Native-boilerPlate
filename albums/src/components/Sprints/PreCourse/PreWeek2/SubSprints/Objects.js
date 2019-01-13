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
              "question" : "How to get the value 'Omari' from object:\nvar person = {\n    name: ['Tal', 'Omari'],\n    age: 25,\n    gender: 'Female',\n    interests: ['Coding', 'Dancing']\n};"
            },
            "question2" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "meow",
                  "option2" : "woof",
                  "option3" : "undefined"
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
                  "option1" : "var newObj = {'prop name': 12}; newObj['prop name']",
                  "option2" : "var newObj = {'prop name': 12}; newObj.prop name"
                },
              "question" : "what is the correct syntax from the following ?"
            }
           
          }
        }      
      }
    }
  }

  render(){
    const topic= 'Objects';
    const Question='What is Object?';
    const introduction = 'Objects can be declared as variables. An object is a collection of UNORDERED properties that can be accessed through the corresponding KEYS';
    const CreateObj= 'Creating Objects in JavaScript';
    const DecleareObject= 'An object is made up of multiple key and property pairs, each of which has a [name] and a [value],Each [name/value] pair must be separated by a (comma) from other pairs, and the [name and value] in each case are separated by a (colon).\n';
    const AccessObj= 'Accessing Object Properties:';
    const Ways='There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.'
    const FirstType='1. Access Object Properties using Dot notation(.) : is used most frequently.';
    const Example='Example for an Object: \nvar person = {\n    name: ["Tal", "Omari"],\n    age: 25,\n    gender: "Female", \n    interests: ["Coding", "Dancing"]\n}'
    const SecondType='2. Access object Properties using bracket notation ([]): If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation on object properties without spaces.';
    const Iterate= 'Iterating through objects: ';
    const IteratingSyntax='Arrays are a special type of object. We can\'t iterate through all objects like we do for array. The right way to iterate through the person object is like this:\n\n'
    const IteratingObject = 'for (var key in objectYouWantToIterate) {\n\
    console.log(objectYouWantToIterate[key])\n\
}';
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
            <View style = {{flex: 7, flexDirection: 'row'}}>
              <Image 
                style= {thumbnailStyle}
                source={require('../../../../../assets/object.png')}/>
            </View>
            <View style = {{flex: 17, flexDirection: 'row'}}>
              <Text style={textContainer} style={{fontWeight:'bold'}}>
                {Question}
                {"\n"}{"\n"}
                <Text style={textContainer} style={{fontWeight:'normal'}}>
                  {introduction}
                  </Text>
              </Text>
            </View>
          </CardSection >
          <CardSection style={container}>
            <View style = {{flex: 7, flexDirection: 'row'}}>
              <Image 
                style= {thumbnailStyle}
                source={require('../../../../../assets/IMG_20181231_193433.png')}/>
            </View>
            <View style = {{flex: 17, flexDirection: 'row'}}>
              <Text style={textContainer} style={{fontWeight:'bold'}}>
                {CreateObj}
                {"\n"}{"\n"}
                <Text style={textContainer} style={{fontWeight:'normal'}}>
                  {DecleareObject}
                </Text>
              </Text>
            </View>
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
                <Text style = {{fontWeight:'bold',color:'#FF33A8'}}>
                  {IteratingObject}
                </Text>
              </Text>
            </Text>
          </CardSection>
          <CardSection style={container}>
            <View >
              <Playquiz  quizData = { this.state.quizData }/>
            </View>
          </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('Data Modeling')}>
              Next
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
    fontWeight: 'bold',
    
   },
    thumbnailStyle: {
        height: 100,
        width: 100
      
        
      }

})

export default Objects
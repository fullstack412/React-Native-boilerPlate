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
                  "option1" : "['Matt','Mtn','Cat']",
                  "option2" : "['Matt','Cat']",
                  "option3" : "'Matt,Cat'"
                },
                "question" : " var string=['hello','Matt','Mtn','Cat','Dog'];\nfunction match(string){\n    return filter(string,function(element){\n        return element.includes('at')\n    }\n};   \nconsole.log(match); "
                },
              "question2" : {
                "correctoption" : "option1",
                "options" : {
                    "option1" : "[2,4,6,8,10]",
                    "option2" : "'2,4,6,8,10'",
                    "option3" : "{2,4,6,8,10}"
                    
                  },
                "question" : "var number=[1,2,3,4,5,6,7,8,9,10] \nfunction even(number){\n    return filter(number,function(num){\n        return num%2 === 0\n })\n    }; \nconsole.log(even);"
              },
              "question3" : {
                "correctoption" : "option2",
                "options" : {
                    "option1" : "'exuberant, destruction, present'",
                    "option2" : "['exuberant', 'destruction', 'present']",
                    "option3" : "['exuberant', 'destruction']"
                  },
                "question" : "var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; \nfunction result(words){\n    return filter(words,function(string){        \n return string.length > 6 ;\n    })\n};\nconsole.log(result);"
              }
            }
          }      
        }
      }
      
  }
  render(){
    const topic='Filter';
    const Question='What Is Filter?';
    const Define='As the name suggests, Filter keeps the element you don\'t want from the ones you want. \
As the programmer, you defined a condition about what kind of element you want. And then you pass that condition \
through the filter. Filter will automatically apply your condition to every element inside the array.\
Filter works very similarly to map. The only difference is that the conditions you define needs to return either true or false. \
If it returns true then the array takes that element and if it returns false that element is filtered out.';
    const example ='The example above shows a list of shapes being passed through the filter. And the output of the filter are only circles. Here is an example in code:'
    const function1='var filteringNumbers = [-50, 10, -20, 14, -55, -89];\n\
function filteringCondition(number) {\n\
    if (number > 0) {\n\
        return true;\n\
    } else {\n\
        return false;\n\
    }\n\
}\n\
fileringNumbers.filter(filteringCondition)\n\
result is: [10, 14]\n\
This function applies the filteringCondition on the array filteringNumber. The filteringCondition is a callback function that passed in the to the built-in filter function as a callback. The filteringCondition tells the filter to only keeps the positive numbers.'

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
          <Text style={{fontWeight:'bold'}}>
            {Question}{"\n"}{"\n"}
            <Text style={{fontWeight:'normal'}}>
              {Define}
            </Text>
          </Text>
        </CardSection>

        <CardSection style={container}>
          <Image 
          style= {thumbnailStyle1}
          source={require('../../../../../assets/Pic7.png')}/>
        </CardSection>
        <CardSection style={container}>
          <Text style={{fontWeight:'normal'}}>
            {example}
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
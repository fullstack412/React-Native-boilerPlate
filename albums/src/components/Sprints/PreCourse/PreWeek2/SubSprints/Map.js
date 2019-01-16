import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
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
                "option1" : "[1, 16, 81]",
                "option2" : "[1, 2, 3]",
                "option3" : "'1, 16, 81'"
              },
              "question" : "var numbers = [1, 4, 9];\nfunction roots(numbers){\n    return map(numbers,function(element){\n        return Math.sqrt(element)\n    })\n}\nconsole.log(roots) "
              },
            "question2" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "[2,3,6,13]",
                  "option2" : "[2,3,5,12]",
                  "option3" : "[2,2,5,12]"
                  
                },
              "question" : "var arr = [1.5, 2.56, 5.1, 12.33];\nfunction rounded(arr){\n    return map(arr,function(ele){\n        return Math.ceil(ele)\n    })\n}\nconsole.log(rounded);"
            },
            "question3" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "0\n1\n2\n3\n[1, 3, 5, 103]",
                  "option2" : "[2,3,4,101]",
                  "option3" : "0\n1\n2\n3",
                  "option4" : "[]"
                    },
              "question" : "var arr = [1, 2, 3, 100];\n\
function test(array) {\n\
  return arr.map(function(x, i) {\n\
    console.log(i);\n\
    return x + i;\n\
  })\n\
}\n\
console.log(test(arr));"
            },
            "question4" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "[1, 4, 9]",
                  "option2" : "{'a':1,'b':4,'c':9}",
                  "option3" : "{'a':1,'b':2,'c':3}"
                    },
              "question" : "var myObject = { 'a': 1, 'b': 2, 'c': 3 }\nfunction IterateObj(myObject){\n    return map(myObject,function(value,key){\n        return value*value\n    })\n}\nconsole.log (IterateObj)"
            }
          }
        }      
      }
    }
  }
  render(){
    const topic='Map';
    const Define='The map() is another Javascript built in function. Both map and forEach/each iterate through the array element by element. However, different from forEach, map returns a new array instead of implement the process on the current array. For example:';
    const function1='var array = [1, 2, 3, 20, -5];\n\
function plusOne(x) {\n\
    return x + 1;\n\
}\n\
var newMap = array.map(plusOne)';
    const ImplementEach='In this example, you pass every element of the array through the plusOne function. The original array was not changed throughout the process. The changed results is stored in another variable:\n';
    const ImplementEach1 = 'newMap = [1, 3, 4, 21, -4]';
    const ImproveMap='Both each and map can be replaced by a simple for loop. However, higher order functions like this is a cleaner way to perform certain operations. Map may be confusing at the begining, but map can save you a lot of trouble once you master its syntax.'
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
          <View style = {{flex: 7, flexDirection: 'row'}}>
            <Image 
              style= {thumbnailStyle}
              source={require('../../../../../assets/Pic5.jpeg')}/>
          </View>
          <View style = {{flex: 17, flexDirection: 'row'}}>
            <Text style={textContainer} >
              {Define}
            </Text>
          </View>
        </CardSection>
        <CardSection style={container}> 
          <Text style={{fontWeight:'bold',color:'green'}}>
            {function1}
          </Text>          
        </CardSection>
        <CardSection>
          <Text>
            {ImplementEach}{"\n"}
            <Text style={{fontWeight:'bold',color:'green'}}>
              {ImplementEach1}
            </Text>
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {ImproveMap}
          </Text>
        </CardSection>


        <CardSection style={container}> 
          <Image
            style={{width:300,height:175}}
            source={require('../../../../../assets/Pic6.png')}/>
        </CardSection>

        <CardSection>
          <TouchableOpacity onPress={() => Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map')}>
            <Text style={{color: 'blue'}}>
              For more information on Map
            </Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection style={container}>
          <View >
            <Playquiz quizData = { this.state.quizData }/>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Higher Order Function: Each')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Higher Order Function: Filter')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Home')}>
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
  textContainer: {
    flex: 1,
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold'
  }, 
  thumbnailStyle: {
    height: 100,
    width: 100
  }
})

export default Map
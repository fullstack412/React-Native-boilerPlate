import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class HigherOrderEach extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const topic='Introduction to Higher Order Functions'
    const Defintion='Higher order function: a function that takes a callback function as an argument.\n   \nWhy Higher order function: They make your code easier to understand and maintain. It also makes it easy to combine functions with each other.\n  \nCallback function: a regular function that is being \
passed in another function as the argument. \nIf you didn\'t understand a word in the last two sentences, don\'t worry. \
This is a very advanced topic, and higher order function is quite unique to Javascript. \n Let\'s explain more through an example, shall we?';
    const ExplainForLoop='Let\'s start with a simple program to console.log a given number of times.\nYou can write a for loop like this:';
    const ForLoop = 'for (var i = 0; i < 5; i++) {\n    console.log(i);\n}\n';
    const Abstract='Let\'s take a step further, and write a function that passes in how many times you want to execute an action as the input.';
    const Function2 = 'function repeat(n) {\n    for (var i = 0; i < n; i++) { \n        console.log(i);\n    }\n}\n';
    const ButFunctionasParameter='If that makes sense, let\'s take another step further. Previously, we passed in the amount of times to run the \
console.log function, now let\'s also pass in the function that is being runned as an input.';
    const Function3 = 'function repeat(n, callback) {\n    for (var i = 0; i < n; i++) {\n        callback(i);\n    }\n}\n'
    const Function31 = 'The code above only defined the callback and repeat function. Here is how we can call those functions together. \n\n'
    const Function32 = 'function logFunction(x) {\n    console.log(x)\n}\nrepeat(5, logFunction)\n\n'
    const Function33 = 'You may start to think, wait, doesn\'t this complicated higher order function does the same purpose as: \n'
    const Function34 = '\nfor (var i = 0; i < 5; i++) {\n    console.log(i);\n}\n\n'
    const Function35 = 'Yes, you are correct. \nThe code we just wrote did do that simple task in a very complicated manner. However, it offers us much much more flexibility. \
We can decide on how many times to run the function, and what function to be runned. That\'s the magic of a higher order and callback function.\n';
    const EachFunction='Now we have some understanding of higher order function, let\'s introduce a Javascript build in higher order funciton: Each. Each and forEach does the same purpose, but they are called slightly different. \
It runs through an array and apply the callback function to each element individually.\n';
    const Function4 = 'each(array, function(element){\n    //perform action on the element\n}\n\n'
    const Function41 = 'The reason we give the input the name element, it is because we are performing the action individually to each element of the array. \
It is very important to know the action you pass in to perform is for a single element, not for an entire array.';
    const ImproveEach='We can pass the element of an array to our function, what if we want to access the index of each element ??';
    const ImproveFunction='each(array,function(element,index){\n // perform action on the element and the index\n }\n';
    const CantUseItWithObj='The above function works with arrays only, what if we have object??';
    const Explain='We have to enhance our Each function to work with objects also.\n The difference here that the for loop does not work with the objects';
    const LastVersion='Each Function that works with both objects and arrays:';
    const LastFunction='function each(n,action){ \n    if(Array.isArray(n)){\n        for(var i=0;i<n.length;i++){\n            action(n[i],i)\n        }\n    \
} else {\n        for (var key in n){\n            action(n[key],key)\n        }\n    }\n}\n'
    const LastFunction1 = 'Keep in mind, the name of all the the input like n, action are up for you to choose. The only built in variabe here is the key. \n\
You may be curious that if we can pass in whatever name we want, then how does the built in each function know if we are passing the \
array instead of the action? It is by the order of the input. The first input is always the array (or object), and the second input is the callback function.';
    const end = 'At first we encourtered the loop function with very limited customization. It runs console.log(i) 5 times. \nThen we learned how to tell the function how many times to run. \n\
And then we made the function able to run beyond just console.log(i). \n\nSure, the code gets longer, but it became more and more customizable. We eventually learned how to write an each \
function that works both for array and object. \nIsn\'t it amazing to see the evolution of higher order functions?'
    const { thumbnailStyle,title,container,textContainer,thumbnailStyle1 }=Styles
    return(
      <Card>
        <CardSection>
          <View>
            <Text style={title}>
              {topic}{"\n"}
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <Image 
            style= {thumbnailStyle}
            source={require('../../../../../assets/Pic1.jpg')} />
        </CardSection>
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            What Is A Higher Order Function? {"\n"}
            <Text style={{fontWeight:'normal'}} >
              {Defintion}
            </Text>
          </Text>
        </CardSection>
        <CardSection style = {{flexDirection: 'column'}}>
          <Text style={{fontWeight:'normal'}}>
            {ExplainForLoop}{"\n"}{"\n"}
            <Text style={{fontWeight:'bold',color:'purple'}}>
              {ForLoop}{"\n"}
              <Text style={{fontWeight:'normal', color: 'black'}}>
                {Abstract}{"\n"}{"\n"}
                <Text style={{fontWeight:'bold',color:'purple'}}>
                  {Function2}{"\n"}
                  <Text style={{fontWeight:'normal',color:'black'}}>
                    {ButFunctionasParameter}{"\n"}{"\n"}
                    <Text style={{fontWeight:'bold',color:'purple'}}>
                      {Function3} {"\n"} 
                      <Text style={{fontWeight:'normal',color:'black'}}> 
                        {Function31}
                        <Text style={{fontWeight:'bold',color:'purple'}}> 
                          {Function32}
                          <Text style={{fontWeight:'normal',color:'black'}}> 
                            {Function33}
                            <Text style={{fontWeight:'bold',color:'purple'}}> 
                              {Function34}
                              <Text style={{fontWeight:'normal',color:'black'}}> 
                                {Function35}
                              </Text>
                            </Text>
                          </Text>
                        </Text>
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </Text>
            </Text>
          </Text>
        </CardSection>

        <CardSection>
          <Text style={{fontWeight:'bold', fontSize: 24}}>
            each function or forEach function {"\n"}
            <Text style={{fontWeight:'normal',color:'black', fontSize: 14}}>
              {EachFunction}{"\n"}
              <Text style={{fontWeight:'bold',color:'purple'}}> 
                {Function4}
                <Text style={{fontWeight:'normal',color:'black'}}> 
                  {Function41}
                </Text>
              </Text>
            </Text>
          </Text>
        </CardSection>

        <CardSection style={{flexDirection: 'column', flex: 1}}>
          <View style = {{flex: 7, flexDirection: 'row'}}>
            <Image 
              style= {thumbnailStyle1}
              source={require('../../../../../assets/Pic2.jpg')}/>
          </View>
          <View style = {{flex: 17, flexDirection: 'row'}}>
            <Text style= {{fontWeight:'bold',color:'black'}} >
              {ImproveEach} {"\n"}{"\n"}
              <Text style={{fontWeight:'bold',color:'purple'}}>
                {ImproveFunction}
              </Text>
            </Text>
          </View>
        </CardSection>


        <CardSection style={container}>
          <View style = {{flex: 7, flexDirection: 'row'}}>
            <Image 
              style= {thumbnailStyle1}
              source={require('../../../../../assets/Pic3.jpg')}/>
          </View>
          <View style = {{flex: 17, flexDirection: 'row'}}>
            <Text style={textContainer} style = {{fontWeight:'bold',color:'black'}}>
              {CantUseItWithObj}{"\n"}{"\n"}
              <Text style={textContainer} style = {{fontWeight:'normal',color:'black'}}>
                {Explain} 
              </Text>
            </Text>
          </View>
        </CardSection>
      <CardSection style={container}>
        <Text style={{fontWeight:'bold'}}>
          {LastVersion}{"\n"}{"\n"}
          <Text style={{fontWeight:'bold',color:'purple'}}>
            {LastFunction}
          </Text>
        </Text>
      </CardSection>
      <CardSection style={container}>
        <Text style={{fontWeight:'bold'}}>
          {end}
        </Text>
      </CardSection>
      <CardSection style={container} >
        <Image style= {thumbnailStyle}
          source={require('../../../../../assets/Pic4.jpg')}/>
      </CardSection>
      <CardSection>
        <TouchableOpacity onPress={() => Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach')}>
          <Text style={{color: 'blue'}}>
            For more information on Each
          </Text>
        </TouchableOpacity>
      </CardSection>
      <CardSection>
        <Button onPress = {()=>this.props.navigation.navigate('Data Modeling')}>
          Previous
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress = {()=>this.props.navigation.navigate('Higher Order Function: Map')}>
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
    textContainer:{
    flex: 1,
     flexWrap: 'wrap'
    },
    title: {
    fontSize: 19,
    fontWeight: 'bold'    
   },
    thumbnailStyle: {
        height: 150 ,
        width: 350
    },
    thumbnailStyle1:{
      height: 100 ,
      width: 100
    }
})

export default HigherOrderEach
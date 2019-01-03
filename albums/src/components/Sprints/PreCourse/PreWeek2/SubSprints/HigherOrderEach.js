import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class HigherOrderEach extends Component{
  constructor(props){
      super(props)
      
  }
  render(){
      const topic='Introduction to Higher Order Functions'
      const Defintion='A higher order function is: a function that takes a function as an argument \n Higher-order functions allow us to abstract over actions, not just values. They come in several forms';
      const ExplainForLoop='It is common for a program to do something a given number of times.\n You can write a for loop for that, like this:';
      const ForLoop=' for (var i = 0; i < 10; i++) {\n console.log(i);\n}';
      const Abstract='Can we abstract “doing something N times” as a function? \n Well, it’s easy to write a function that calls console.log N times.';
      const Function2='function repeatLog(n) {\n for (var i = 0; i < n; i++) { \n console.log(i);\n  }\n}';
      const ButFunctionasParameter='But what if we want to do something other than logging the numbers? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.';
      const Function3='function repeat(n, action) {\n for (var i = 0; i < n; i++) {\n action(i);\n } \n}';
      const EachFunction='Now Our Each function will be:';
      const Function4='each(n,function(element){\n  // do stuff\n }\n \n N: our array that we want to loop through it \n Element: elements inside our array ';
      const ImproveEach='But using this version we can pass the element of an array to our function, \n what if we want to access the index of each element ??';
      const ImproveFunction='each(n,function(element,i){\n // do stuff\n }\n N: our array that we want to loop through it \n Element : elements inside our array \n I: element indexe';
      const CantUseItWithObj='This always works with arrays only, what if we have object??';
      const Explain='We have to enhance our Each function to work with objects also.\n The difference here that the for loop does not work with the objects';
      const LastVersion='Last version For Our Each Function:';
      const LastFunction='Function each(n,action){ \n if(Array.isArray(n)){\n for(var i=0;i<n.length;i++){\n action(n[i],i)\n  }\n }else{\n For (var key in n){\n action(n[key],key)\n  }\n   }\n }';
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
                    source={require('../../../../../assets/Pic1.jpg')} />
              </CardSection>
              <CardSection style={container}>
                  <Text style={{fontWeight:'bold'}}>
                    What Is A Higher Order Function? {"\n"}
                    <Text style={{fontWeight:'normal'}} >
                        {Defintion}
                    </Text>
                  </Text>
              </CardSection>
              <CardSection style={container}>
                  <Text style={{fontWeight:'bold'}}>
                    Each {"\n"}
                    <Text style={{fontWeight:'normal'}}>
                        {ExplainForLoop}{"\n"}{"\n"}
                        <Text style={{fontWeight:'bold',color:'purple'}}>
                            {ForLoop}{"\n"}
                        </Text>
                        <Text style={{fontWeight:'normal'}}>
                        {Abstract}{"\n"}{"\n"}
                        <Text style={{fontWeight:'bold',color:'purple'}}>
                            {Function2}{"\n"}
                            <Text style={{fontWeight:'normal',color:'black'}}>
                                {ButFunctionasParameter}{"\n"}{"\n"}
                                <Text style={{fontWeight:'bold',color:'purple'}}>
                                  {Function3} {"\n"} 
                                  <Text style={{fontWeight:'bold',color:'black'}}>
                                  {EachFunction}{"\n"}
                                  <Text style={{fontWeight:'bold',color:'purple'}}> 
                                    {Function4}
                                  </Text>

                                  </Text>
                                </Text>
                            </Text>
                        </Text>
                        </Text>
                    </Text>
                  </Text>
              </CardSection>
              <CardSection style={container}>
              <Image 
                    style= {thumbnailStyle1}
                    source={require('../../../../../assets/Pic2.jpg')}/>

                <Text style={textContainer} >
                   {ImproveEach} {"\n"}{"\n"}
                   <Text style={{fontWeight:'bold',color:'purple'}}>
                        {ImproveFunction}
                   </Text>
                </Text>
              </CardSection>
              <CardSection style={container}>
              <Image 
                    style= {thumbnailStyle1}
                    source={require('../../../../../assets/Pic3.jpg')}/>

                <Text style={textContainer}>
                    {CantUseItWithObj}{"\n"}{"\n"}{Explain} 
                </Text>
              </CardSection>
              <CardSection style={container}>
              <Text style={{fontWeight:'bold'}}>
                    {LastVersion}{"\n"}{"\n"}
                    <Text style={{fontWeight:'bold',color:'purple'}}>
                    {LastFunction}
                    </Text>
                </Text>
              </CardSection>
              <CardSection style={container} >
                   <Image style= {thumbnailStyle}
                    source={require('../../../../../assets/Pic4.jpg')}/>
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
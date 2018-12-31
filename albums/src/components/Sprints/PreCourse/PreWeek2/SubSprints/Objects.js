import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class Objects extends Component{
  constructor(props){
      super(props)
     
  }
  render(){
    const topic= 'Objects';
    const Question='What is object?';
    const introduction = 'Objects are variables , A JavaScript object is a collection of unordered properties';
    const DecleareObject= 'an object is made up of multiple members, each of which has a name and a value,Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon'
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
                {DecleareObject}{"\n"}
            </Text>
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
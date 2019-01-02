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
      const Defintion='A higher order function is: a function that takes a function as an argument \n Higher-order functions allow us to abstract over actions, not just values. They come in several forms'
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
                    source={require('../../../../../assets/Pic1.jpg')} />
                
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
      
        
      }
    
})

export default HigherOrderEach
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class Map extends Component{
  constructor(props){
      super(props)
     
  }
  render(){
    const { thumbnailStyle,title,container,textContainer,thumbnailStyle1}=Styles
    return(
      <Card>
        <CardSection>

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

export default Map
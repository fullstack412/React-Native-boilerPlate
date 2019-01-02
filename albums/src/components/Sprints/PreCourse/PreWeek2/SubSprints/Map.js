import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';


class Map extends Component{
  constructor(props){
      super(props)
     
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
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

class DataModeling extends Component{
  constructor(props){
      super(props)
     
  }
  render(){
    const topic='Data Modeling';
    const Define='Data modeling is the process of documenting a complex software system design as an easily understood diagram, using text and symbols to represent the way data needs to flow.';
    const Factory='A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.';
    const function1='function makePerson(firstName,lastName, age){\n returtun {\n firstName:firstName,\n lastName:lastName,\n age:age \n }\n }';
    const UseFactoryFun='We can use our factory function instead of having to type out a new object every single time.';
    const function2='var Person1=makePerson("Tal","Omari",25)';
    const MakeDisplay='You can make a display function :';
    const function3='function displayPerson(person){\n return person.firstName+ " " +person.age \n }';
    const { thumbnailStyle,title,container,textContainer,thumbnailStyle1}=Styles;
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
         style= {thumbnailStyle1}
         source={require('../../../../../assets/Pic8.jpg')}/>
        </CardSection>
        <CardSection style={container} >
          <Text style={{fontWeight:'bold'}}>
            What Is Data Modeling??{"\n"}{"\n"}
            <Text style={{fontWeight:'normal'}}>
              {Define}
            </Text>
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
          Factory functions: {"\n"}{"\n"}
          <Text style={{fontWeight:'normal'}}>
            {Factory}{"\n"}{"\n"}
            <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
              {function1}{"\n"}{"\n"}
              <Text style={{fontWeight:'normal',color:'black'}}>
                {UseFactoryFun} {"\n"}{"\n"}
                <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                  {function2}{"\n"}{"\n"}
                  <Text style={{fontWeight:'bold',color:'black'}}>
                    {MakeDisplay}{"\n"}{"\n"}
                    <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                      {function3}
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
         source={require('../../../../../assets/Pic9.jpg')}/>
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

export default DataModeling
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Card, CardSection, Header } from '../../common';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import Prep1 from './PreWeek1/Main';
import Prep2 from './PreWeek2/Main';
import Prep3 from './PreWeek3/Main';
import Prep4 from './PreWeek4/Main';


const CourseDetail = (props) => {
  console.log('props CourseDetail', props)
  const { topic, introduction, image } = props.info;
    
  const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
  

  return (
    <Card>
      <CardSection>
        <View style = {thumbnailContainerStyle}>
            <Image 
              style = {thumbnailStyle} 
              source = {image}
            />
        </View>
        <View style = {headerConetentStyle}>
          <Text style = {headerTextStyle}>
            {topic}{"\n"}
          </Text>
        </View>				
      </CardSection>

      <CardSection>
        <Text>
          Introduction:{"\n"}{introduction}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Button title = 'Go Page' onPress = {()=>{console.log(this.props.navigation)}}>
        </Button>
      </CardSection>	
      <CardSection>
        <TouchableOpacity>
          <Icon size = {30} name= "ios-trash" color = "red"/>
        </TouchableOpacity>
      </CardSection>	
    </Card>
  );
}


const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

export default CourseDetail;
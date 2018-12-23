import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../../common';
import { CardSection } from '../../common';
import { Button } from '../../common';
import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetail = ({ info }) => {
  // destructuring
  const { topic, introduction, image } = info;
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
        <Button>
          Go To Page
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
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card, CardSection } from '../../common';

import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetail = (props) => {
  // destructuring
  const { topic, introduction, image, button } = props.info;
  const { gotoButton } = props;
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
        <Button onPress = {()=> gotoButton(button)}>
          Go To Page
        </Button>
      </CardSection>	
      {/* <CardSection>
        <TouchableOpacity>
          <Icon size = {30} name= "ios-trash" color = "red"/>
        </TouchableOpacity>
      </CardSection>	 */}
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
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card } from './common';
import { CardSection } from './common';
import { Button } from './common';

const CourseDetail = ({ info }) => {
    // destructuring
  const { topic, introduction, body } = info;
  const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;

  return (
    <Card>
      <CardSection>
        <View style = {thumbnailContainerStyle}>
            <Image 
              style = {thumbnailStyle} 
              source = {{ src: '../practiceImage/profile1.png'}}
            />
        </View>
        <View style = {headerConetentStyle}>
          <Text>
            This course is: 
          </Text>
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
        <Text>
          Body:{"\n"}{body}{"\n"}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Button>
          Go To Page
        </Button>
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
    fontSize: 28
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
});

export default CourseDetail;
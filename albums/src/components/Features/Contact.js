import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../common';
import { Card } from '../common';
import { CardSection } from '../common';

class Contact extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Contact'
    const introduction = '07911122233';
    const body = 'AlexMercer@test.com';
    const end = 'In a building'
    
    return (
      <Card>
      <CardSection>
        <View style = {headerConetentStyle}>
          <Text style = {headerTextStyle}>
            {topic}{"\n"}
          </Text>
        </View>				
      </CardSection>

      <CardSection>
        <Text>
          Phone Number{"\n"}{introduction}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Email:{"\n"}{body}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Address:{"\n"}{end}{"\n"}
        </Text>
      </CardSection>
    </Card>
    );
  }
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
export default Contact;
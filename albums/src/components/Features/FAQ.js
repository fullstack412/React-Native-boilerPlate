import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../common';
import { Card } from '../common';
import { CardSection } from '../common';

class FAQ extends Component {

  
  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Frequently Ask Questions'
    const introduction = 'Use your computer to study';
    const body = 'The smartest';
    const end = 'Google it'
    
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
        How should I study for RBK?{"\n"}{introduction}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Who is Fatema:{"\n"}{body}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Where is RBK:{"\n"}{end}{"\n"}
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
export default FAQ;
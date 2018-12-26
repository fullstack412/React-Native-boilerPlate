import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection } from '../../common';

class Main extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Townhall'
    const introduction = 'Post questions about the sprint here';
    
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
            Input:{"\n"}{introduction}{"\n"}
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
export default Main;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Card, CardSection } from '../common';


class Handbook extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'RBK Student Handbook'
    const introduction = 'Don\'t be late';
    const body = 'No Copy';
    const end = 'Be respectful'
    
    return (
      <Card>
        <Header />
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}{"\n"}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
            Rule 1: {"\n"}{introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            Rule 2: {"\n"}{body}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            Rule 3: {"\n"}{end}{"\n"}
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
export default Handbook;
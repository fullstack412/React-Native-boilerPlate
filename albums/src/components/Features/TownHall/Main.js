import React, { Component } from 'react';
import { Alert, TextInput, StyleSheet, Text, View } from 'react-native';
import { Header, Button, Card, CardSection } from '../../common';

class Main extends Component {

  
  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, textAreaContainer, textArea, nameText } = Styles;
    const topic = 'Townhall'
    const introduction = 'Post questions about the sprint here';
    
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
            {introduction}{"\n"}
          </Text>
        </CardSection>
        <CardSection>
          <Text>Your Name: </Text>
          <View style={textAreaContainer} >
            <TextInput
              style = {nameText}
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={textAreaContainer} >
            <TextInput
              style={textArea}
              underlineColorAndroid="transparent"
              placeholder="Post questions about the sprint here"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
        </CardSection>
        <CardSection>
          <Button onPress = {() => Alert.alert('Your question has been submitted.')}>
            Submit
          </Button>
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
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  nameText: {
    flex: 1,
    width: 200,
    alignItems: 'stretch'
  }
});
export default Main;
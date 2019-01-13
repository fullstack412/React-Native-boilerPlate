import React, { Component } from 'react';
import { Alert, TextInput, StyleSheet, TouchableOpacity, Text, View, Picker, Link } from 'react-native';
import { Header, Button, Card, CardSection } from '../../common';
import firebase from 'firebase';
import api from '../../../../noDelete';
import moment from 'moment';

class Main extends Component {
  state = {
    name: '',
    emotion: '',
    emotionList: [
      ['Super Happy', 5]
      ['Happy', 4],
      ['Doing Okay', 3],
      ['Upset', 2], 
      ['Sad', 1]
    ]
  }

  const = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, pickerContainerStyle } = api.Authenticaltion


  componentWillMount() {
    firebase.initializeApp({
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId
    });
  }

  submitEmotion() {
    let time = moment(new Date()).format("YYYY-MM-DD hh:mm:ss a").split(' ');
    time.splice(3, 1);
    time.join('');

    firebase.database().ref(`survey/${time}`).set(
      {
        name: this.state.name,
        question: this.state.emotion
      }
    ).then(() => {
      Alert.alert(`Thank you ${this.state.name}, we have received your submission.`);
    }).catch((error) => {
      Alert.alert('Please restart the App, due to error: ', error);
    })
  }
  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, pickerContainerStyle, textAreaContainer, nameText } = Styles;
    const topic = 'Emotional Survey'
    const introduction = 'Your emtional health is very important to us';
    
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
            {introduction}
          </Text>
        </CardSection>

        <CardSection>
          <Text>Your Name: </Text>
          <View style={textAreaContainer} >
            <TextInput
              onChangeText = {(textEntry) => {this.setState({name: textEntry})}}
              style = {nameText}
            />
          </View>
        </CardSection>

        <CardSection>
          <Picker
            style = { pickerContainerStyle }
            selectedValue={this.state.emotion}
            onValueChange={(itemValue) => this.setState({ emotion: itemValue})} >
            <Picker.Item label="Select Emotion" value = "DropDown" />
            <Picker.Item label="Super Happy" value = "5" />
            <Picker.Item label="Happy" value = "4" />
            <Picker.Item label="Feeling Okay" value = "3" />
            <Picker.Item label="Little Sad" value = "2" />
            <Picker.Item label="Really Sad" value = "1" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress = {() => this.submitEmotion()}>
            Submit
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Calendar')}>
            Calendar
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('TownHall')}>
            TownHall
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Handbook')}>
            Student Handbook
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
  pickerContainerStyle: {
    flex: 1,
    justifyContent: "center",
    margin :30
  },
  nameText: {
    flex: 1,
    width: 200,
    alignItems: 'stretch'
  },
  nameText: {
    flex: 1,
    width: 200,
    alignItems: 'stretch'
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default Main;
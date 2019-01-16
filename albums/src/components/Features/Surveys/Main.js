import React, { Component } from 'react';
import { Alert, TextInput, StyleSheet, TouchableOpacity, Text, View, Picker, Linking } from 'react-native';
import { Button, Card, CardSection } from '../../common';
import firebase from 'firebase';
import api from '../../../../noDelete';
import moment from 'moment';

class Main extends Component {
  state = {
    authorized: [],
    currentlyAuthorized: false,
    name: '',
    emotion: '',
    allEmotions: []
  }

  const = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, pickerContainerStyle } = api


  componentWillMount() {
    if (!firebase.apps.length) {      
      firebase.initializeApp({
        apiKey: apiKey,
        authDomain: authDomain,
        databaseURL: databaseURL,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId
      });
    }

        // pull from database to check who is the admin user
    firebase.database().ref(`admin`).once('value', (data) => {
      data = data.toJSON();
      let authorized = [];
      if (data !== null) {
        Object.keys(data).map((key) => {
          authorized.push(key)
        })
      }
      this.setState({
        authorized
      })
      this.state.authorized.map((id) => {
        if (id === firebase.auth().currentUser.uid) {
          this.setState({
            currentlyAuthorized: true
          })
        }
      })
    }).catch((error) => {
      Alert.alert('Please restart the App, due to error: ', error);
    })
    
  }

  submitEmotion() {
    let time = moment(new Date()).format("YYYY-MM-DD hh:mm:ss a").split(' ');
    time.splice(1, 1);
    time = time.join('');
    let name = this.state.name;
    let emotion = this.state.emotion;
    firebase.database().ref(`survey/${time}/${name}`).set(
      {
        emotion
      }
    ).then(() => {
      Alert.alert(`Thank you ${this.state.name}, we have received your submission.`);
    }).catch((error) => {
      Alert.alert('Please restart the App, due to error: ', error);
    })
  }

  requestEmotions() {
    let time = moment(new Date()).format("YYYY-MM-DD hh:mm:ss a").split(' ');
    time.splice(1, 1);
    time = time.join('');
    if (firebase.auth().currentUser !== null) {
      if (this.state.currentlyAuthorized) {
        firebase.database().ref(`survey/${time}`).once('value', (data) => {
          data = data.toJSON();
          if (data !== null) {
            this.setState({
              allEmotions: 
                Object.keys(data).map((key) => (
                  [key, data[key]['emotion']]
                ))
            })
          } else {
            this.setState({
              allEmotions: [[' ', 'No one filled out yet 😞']]
            })
          }
        }).catch((error) => {
          Alert.alert('Please restart the App, due to error: ', error);
        })
        Alert.alert('Hi, the smartest and the most humble Fatema, here is your data')
      } else {
        Alert.alert('Sorry, you don\' have access to this information. Apply to be HIR');
      }
    } else {
      Alert.alert('Please log in first')
    }  
  }

  mapOutEmotions() {
    return this.state.allEmotions.map(element => (
      <CardSection key = {element[1]}>
        <Text style={{fontWeight:'bold'}}>
          {element[0]} feels {element[1]}
        </Text>
      </CardSection>
    ))    
  }
  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, pickerContainerStyle, textAreaContainer, nameText } = Styles;
    const topic = 'Emotional Survey'
    const introduction = 'Your emtional health is very important to us';
    
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
            <Picker.Item label="Super Happy 😋" value = "5" />
            <Picker.Item label="Happy 😁" value = "4" />
            <Picker.Item label="Feeling Okay 😐" value = "3" />
            <Picker.Item label="Little Sad 😞" value = "2" />
            <Picker.Item label="Really Sad 💀" value = "1" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress = {() => this.submitEmotion()}>
            Submit
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {() => this.requestEmotions()}>
            Show Students Emotions
          </Button>
        </CardSection>
        
        {this.mapOutEmotions()}        

        <CardSection>
          <TouchableOpacity onPress={() => Linking.openURL('https://rbkemotinal.herokuapp.com/login')}>
            <Text style={{color: 'blue'}}>
              Original Emotional Health
            </Text>
          </TouchableOpacity>
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
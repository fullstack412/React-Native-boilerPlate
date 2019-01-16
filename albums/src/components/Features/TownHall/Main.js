import React, { Component } from 'react';
import { Alert, TextInput, StyleSheet, TouchableOpacity, Text, View, Picker } from 'react-native';
import { Button, Card, CardSection } from '../../common';
import firebase from 'firebase';
import api from '../../../../noDelete';

class Main extends Component {
  state = {
    authorized: [],
    currentlyAuthorized: true,
    name: '',
    question: '',
    sprint: '',
    allQuestions: [],
    sprintList: {
      'JavaScript Fundamentals and Functions': 0,
      'Booleans, Comparisons, and Operators': 0,
      'Variables in JavaScript': 0,
      'While Loop': 0,
      'Arrays and For Loops': 0,
      'Objects': 0,
      'Data Modeling': 0,
      'Higher Order Function: Each': 0,
      'Higher Order Function: Map': 0,
      'Higher Order Function: Filter': 0,
      'Reduce': 0,
      'Closures And Adding Methods': 0,
      'OOP': 0,
      'HTML, CSS and jQuery': 0,
      'Git': 0,
      'Testing': 0,
      'Web Development': 0,
    }
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

    firebase.database().ref(`townhall`).once('value', (data) => {
      data = data.toJSON();
      let sprintList = {...this.state.sprintList};
      if (data !== null) {
        Object.keys(data).map((key) => (
          sprintList[key] = Object.keys(data[key]).length
        ))
      }
      this.setState({
        sprintList
      })
    }).catch((error) => {
      Alert.alert('Please restart the App, due to error: ', error);
    })

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

  dropDownSprintList() {
    let dropDownList = this.state.sprintList;
    return Object.keys(dropDownList).map(element => (
      <Picker.Item label={element} value={element} key = {element}/>
    ))
  }

  submitQuestion() {
    let sprintList = {...this.state.sprintList};
    if (sprintList[this.state.sprint] !== undefined) {
      sprintList[this.state.sprint]++;
    } 
    this.setState({
      sprintList
    })
    let questionCount = this.state.sprintList[this.state.sprint];
    firebase.database().ref(`townhall/${this.state.sprint}/${questionCount}`).set(
      {
        name: this.state.name,
        question: this.state.question
      }
    ).then(() => {
      Alert.alert(`Thank you ${this.state.name}, you question has been submitted`);
    }).catch((error) => {
      Alert.alert('Please restart the App, due to error: ', error);
    })
  }

  requestQuestions() {
    let currentSprint = this.state.sprint

    // check if the author has admin read access
    if (firebase.auth().currentUser !== null) {
      // this.state.authorized.map((id) => {
      //   if (id === firebase.auth().currentUser.uid) {
      if (this.state.currentlyAuthorized) {
        firebase.database().ref(`townhall/${currentSprint}`).once('value', (data) => {
          data = data.toJSON();
          if (data !== null) {
            this.setState({
              allQuestions: 
                Object.keys(data).map((key) => (
                  [data[key]['name'], data[key]['question']]
                ))
            })
          } else {
            this.setState({
              allQuestions: [[' ', 'None...']]
            })
          }
        }).catch((error) => {
          Alert.alert('Please restart the App, due to error: ', error);
        })
      } else {
        Alert.alert('Sorry, you don\' have access to this information. Apply to be HIR');
      }
    } else {
      Alert.alert('Please log in first')
    }
  }

  mapOutQuestions() {
    return this.state.allQuestions.map(element => (
      <CardSection key = {element[1]}>
        <Text style={{fontWeight:'bold'}}>
          In sprint: {this.state.sprint}{"\n"}
          <Text style={{fontWeight:'normal'}}>
            {element[0]} asked the question: {element[1]}
          </Text>
        </Text>
      </CardSection>
    ))
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, textAreaContainer, textArea, nameText, pickerContainerStyle } = Styles;
    const topic = 'Townhall'
    const introduction = 'Select the sprint you are currently on, and post your question below.';
    
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
            {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Picker
            style = { pickerContainerStyle }
            selectedValue={this.state.sprint}
            onValueChange={(itemValue) => this.setState({ sprint: itemValue})} >
            <Picker.Item label="Select Options" value = "DropDown" /> 
            { this.dropDownSprintList() }
          </Picker>
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
          <View style={textAreaContainer} >
            <TextInput
              style={textArea}
              underlineColorAndroid="transparent"
              placeholder="Post questions about the sprint here"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText = {(textEntry) => {this.setState({question: textEntry})}}
              onSubmitEditing = {() => this.submitQuestion()}
            />
          </View>
        </CardSection>
        
        <CardSection>
          <Button onPress = {() => this.submitQuestion()}>
            Submit
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {() => this.requestQuestions()}>
            Show Other Questions
          </Button>
          
        </CardSection>
        
        {this.mapOutQuestions()}

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Calendar')}>
            Calendar
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Surveys')}>
            Surveys
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
  },
  pickerContainerStyle: {
    flex: 1,
    justifyContent: "center",
    margin :30
  }
});
export default Main;
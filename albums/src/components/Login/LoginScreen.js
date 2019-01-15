// TODO: Test new buttons After Login

import firebase from 'firebase';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Spinner, CardSection, Card } from '../common';
import LoginForm from './LoginForm';
import api from '../../../noDelete';

class LoginScreen extends Component {
  // null: not sure if logged in, false: not logged in, true: logged in
  state = { loggedIn: null };
  const = { spinnerCenter } = Styles;
  const = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId} = api

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
      
    // track whether user is logged in
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn : true});
    //   } else {
    //     this.setState({ loggedIn : false});
    //   }
    // });
    firebase.auth().onAuthStateChanged(this.signInToggle.bind(this));
  }

  signInToggle(user) {
    if (user) {
      this.setState({ loggedIn : true});
    } else {
      this.setState({ loggedIn : false});
    }
  }

  // Change display based on whether user is signed in
  renderContent() {
    if (this.state.loggedIn === null) {
      return (
        <View style = { spinnerCenter }>
          <Spinner size = "large" />
        </View>
      );
    } else if (this.state.loggedIn === true) {
      this.props.navigation.navigate('LoginTile', {toggle: this.signInToggle.bind(this)});
      // this.props.navigation.navigate('LoginTile', {toggle: 123});
      
      // return (
      //   <Card>
      //     <CardSection>
      //       <Button onPress = {() => firebase.auth().signOut()}>
      //         Logging Out
      //       </Button>
      //     </CardSection> 


      //     <CardSection>
      //       <Button onPress = {()=>this.props.navigation.navigate('Calendar')}>
      //         Calendar
      //       </Button>
      //     </CardSection>

      //     <CardSection>
      //       <Button onPress = {()=>this.props.navigation.navigate('Surveys')}>
      //         Surveys
      //       </Button>
      //     </CardSection>

      //     <CardSection>
      //       <Button onPress = {()=>this.props.navigation.navigate('TownHall')}>
      //         TownHall
      //       </Button>
      //     </CardSection>

      //     <CardSection>
      //       <Button onPress = {()=>this.props.navigation.navigate('Handbook')}>
      //         Student Handbook
      //       </Button>
      //     </CardSection>
          

      //   </Card>
      // )
    } else {
      return <LoginForm />;
    }
  }

  render() {
    return (
      <View>
        {/* <Header headerText = 'Login Page'/> */}
        {this.renderContent()}
      </View>
    ); 
  }

}

const Styles = StyleSheet.create({
  spinnerCenter: {
    alignSelf: 'center',
    justifyContent: 'center'
  }  
});

export default LoginScreen;

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    // loading checks whether it is currently loading
    // spinner is depends on loading
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ 
      error: 'Authentication Failed',
      loading: false
    });
  }

  // only render spinner or button whether program is loading
  renderButton() {
    if (this.state.loading) {
      return <Spinner size = "small"/>
    }
    return (
      <Button onPress = { this.onButtonPress.bind(this) }>
        Log in
      </Button>         
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = "user@gmail.com"
            label = 'Email' 
            value = {this.state.email}
            onChangeText = { email => this.setState({ email })}
          />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry = { true }
            placeholder = "p4ssw0rd"
            value = { this.state.password }
            label = "Password"
            onChangeText = { password => this.setState({ password })}
          />						
        </CardSection>

        <Text style = { Styles.errorText }>
          { this.state.error }
        </Text>

        <CardSection>
          {this.renderButton()}                    
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  errorText : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';
import firebase from 'firebase';
class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    console.log('button');
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed'});
          });
      });
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
          <Button onPress = { this.onButtonPress.bind(this) }>
            Log in
          </Button>                    
        </CardSection>
      </Card>
    );
  }
}

const Styles = {
  errorText : {
    font: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '../../common';
import { Card } from '../../common';
import { CardSection } from '../../common';

class Main extends Component {

  state = { placeName: ''};

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      // <View style = {Styles.container}>
        <Card>
          <CardSection>
            <TextInput
              style={{width: 300}}
              placeholder='Git Review'
              value={this.state.placeName}
              onChangeText = {this.placeNameChangedHandler}
            />
            <Button>
              Choose A
            </Button>
          </CardSection>
        </Card>
      // </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26, backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export default Main;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class closureExampleExplanation extends Component {
  render() {
    return (
      <CardSection>
        <Text style={Styles.boldHeader}>
          Example:&nbsp;{'\n'}
          <Text style={Styles.array}>
            [1,5,6]
            </Text>
          .
            <Text style={Styles.reduce}>
            reduce
            </Text>
          ({'\n'}
          <Text style={Styles.cb}>
            &nbsp;&nbsp;function
            </Text>
          (
            <Text style={Styles.acc}>
            acc
            </Text>
          ,
            <Text style={Styles.elem}>
            elem
            </Text>
          ,
            <Text style={Styles.i}>
            i
            </Text>
          ){'{'}{'\n'}
          <Text style={Styles.array}>
            &nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;
            </Text>
          <Text style={Styles.cb}>
            acc+elem{'\n'}
          </Text>
          &nbsp;&nbsp;},{'\n'}
          <Text style={Styles.iv}>
            0
            </Text>
          )
        </Text>
      </CardSection>
    );
  }
}

const Styles = StyleSheet.create({
  boldHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  text: {
    color: 'black'
  },
  array: {
    color: 'red',
  },
  reduce: {
    color: 'blue',
  },
  cb: {
    color: 'green',
  },
  acc: {
    color: '#9932CC',
  },
  elem: {
    color: '#FF8C00',
  },
  i: {
    color: 'red',
  },
  iv: {
    color: '#FF00FF',
  },
});
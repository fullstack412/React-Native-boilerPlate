import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

export default class ReduceSyntax extends Component {
  render() {
    return (
      <CardSection>
        <Text style={Styles.boldHeader} >
          Syntax:{' '}
        <Text style={Styles.array}>
            array
        </Text>
          .
        <Text style={Styles.reduce}>
            reduce
        </Text>
          (
        <Text style={Styles.cb}>
            cb
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
          ),
        <Text style={Styles.iv}>
            iv
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
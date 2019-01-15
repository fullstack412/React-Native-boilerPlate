import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class AddingMethodsExample extends Component {
  render() {
    const { boldHeader, text, func, balance, closure, amount, object, iv } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={Styles.boldText}>
            Now what if we want to return many functions what we can return?{'\n'}
            We can return an object and each key inside it has a fucntion,
            so now lets improve the clouser and add methods to it.{'\n'}{'\n'}
          </Text>
          <Text style={boldHeader}>
            Example:{'\n'}
          </Text>
          <Text style={func}>
            function addingMethods(
            <Text style={Styles.balance}>
              initial
            </Text>
            ){'{'}{'\n'}
            {' '}{' '}var
            <Text style={Styles.balance}>
              {' '}balance
            </Text>
            {' '}=
            <Text style={Styles.balance}>
              {' '}initial
            </Text>
            ;{'\n'}{' '}{' '}var
            <Text style={Styles.object}>
              {' '}object{' '}
            </Text>
            =
            <Text style={Styles.object}>
              {' '}{'{'}{'\n'}
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}withdraw{' '}
              </Text>
              :
              <Text style={Styles.key}>
                {' '}function(
                <Text style={Styles.amount}>
                  amount
                </Text>
                ){'{'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}if(
                <Text style={Styles.balance}>
                  balance
                </Text>
                {' '}-
                <Text style={Styles.amount}>
                  {' '}amount
                </Text>
                {' '}>=
                  <Text style={Styles.text}>
                  {' '}0
                  </Text>
                ){'{'}{'\n'}
                <Text style={Styles.balance}>
                  {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}balance
                </Text>
                {' '}=
              <Text style={Styles.balance}>
                  {' '}balance
              </Text>
                {' '}-
              <Text style={Styles.amount}>
                  {' '}amount
              </Text>
                ;{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                  Success to withdraw:{' '}
                </Text>
                ‘ +
                <Text style={Styles.amount}>
                  {' '}amount
                </Text>
                ;{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}{'}'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                  Failed to withdraw:{' '}
                </Text>
                ‘ +
                <Text style={Styles.amount}>
                  {' '}amount
              </Text>
                ;{'\n'}
              </Text>
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}{'}'}
              </Text>
              ,{'\n'}

              {/* the second key deposit */}
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}deposit{' '}
              </Text>
              :
              <Text style={Styles.key}>
                {' '}function(
                <Text style={Styles.amount}>
                  amount
                </Text>
                ){'{'}{'\n'}
                <Text style={Styles.balance}>
                  {' '}{' '}{' '}{' '}{' '}{' '}balance
                </Text>
                {' '}=
              <Text style={Styles.balance}>
                  {' '}balance
              </Text>
                {' '}+
              <Text style={Styles.amount}>
                  {' '}amount
              </Text>
                ;{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                  Your balance now is:{' '}
                </Text>
                ‘ +
                <Text style={Styles.balance}>
                  {' '}balance
                </Text>
                ;{'\n'}
              </Text>
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}{'}'}
              </Text>
              ,{'\n'}
              {/* the third key checkBalance */}
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}checkBalance{' '}
              </Text>
              :
              <Text style={Styles.key}>
                {' '}function(){'{'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={Styles.text}>
                  Your balance is:{' '}
                </Text>
                ‘ +
                <Text style={Styles.balance}>
                  {' '}balance
                </Text>
                ;{'\n'}
              </Text>
              <Text style={Styles.key}>
                {' '}{' '}{' '}{' '}{'}'}{'\n'}
              </Text>
              {' '}{' '}{'}'}{'\n'}
            </Text>
            {' '}{' '}return
              <Text style={Styles.object}>
              {' '}object
              </Text>
            ;{'\n'}{'}'}
          </Text>
        </Text>

      </CardSection >
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
    fontWeight: 'bold',
    color: 'black'
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  closure: {
    color: 'red',
  },
  amount: {
    color: '#9932CC',
  },
  object: {
    color: '#FF00FF',
  },
  key: {
    color: '#FF8C00',
  },
});
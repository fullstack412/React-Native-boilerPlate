import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class OOPExample extends Component {
  render() {
    const { boldHeader, text, boldText, func, balance, variable, amount, object, key } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Example:{'\n'}
          </Text>
          <Text style={boldText}>

            <Text style={func}>
              function objectOriented(
              <Text style={balance}>
                initial
              </Text>
              ){'{'}{'\n'}
              {' '}{' '}var
              <Text style={object}>
                {' '}object{' '}
              </Text>
              =
              <Text style={object}>
                {' '}{'{'}{'\n'}
                {/* Balance key */}
                <Text style={key}>
                  {' '}{' '}{' '}{' '}balance{' '}
                </Text>
                :
                <Text style={balance}>
                  {' '}initial
                </Text>
                ,{'\n'}

                {/* Withdraw key */}
                <Text style={key}>
                  {' '}{' '}{' '}{' '}withdraw{' '}
                </Text>
                :
                <Text style={variable}>
                  {' '}withdrawFunc
                </Text>
                ,{'\n'}

                {/* Deposit key */}
                <Text style={key}>
                  {' '}{' '}{' '}{' '}deposit{' '}
                </Text>
                :
                <Text style={variable}>
                  {' '}depositFunc
                </Text>
                ,{'\n'}

                {/* CheckBalance key */}
                <Text style={key}>
                  {' '}{' '}{' '}{' '}checkBalance{' '}
                </Text>
                :
                <Text style={variable}>
                  {' '}checkBalanceFunc
                </Text>
                {'\n'}{' '}{' '}{'}'}{'\n'}
              </Text>
              {' '}{' '}return
              <Text style={object}>
                {' '}object
              </Text>
              ;{'\n'}{'}'}{'\n'}{'\n'}
            </Text>
            {/* Global variables */}
            {/* the first var withdrawFunc */}
            var
            <Text style={variable}>
              {' '}withdrawFunc{' '}
            </Text>
            =
            <Text style={variable}>
              {' '}function(
              <Text style={amount}>
                amount
              </Text>
              ){'{'}{'\n'}
              {' '}{' '}if(
              <Text style={object}>
                this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              {' '}-
              <Text style={amount}>
                {' '}amount
              </Text>
              {' '}>=
              <Text style={text}>
                {' '}0
              </Text>
              ){'{'}{'\n'}
              <Text style={object}>
                {' '}{' '}{' '}{' '}this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              {' '}={' '}
              <Text style={object}>
                this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              {' '}-
              <Text style={amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                Success to withdraw:{' '}
              </Text>
              ‘ +
                <Text style={amount}>
                {' '}amount
                    </Text>
              ;{'\n'}
              {' '}{' '}{'}'}{'\n'}
              {' '}{' '}return ‘
              <Text style={text}>
                Failed to withdraw:{' '}
              </Text>
              ‘ +
                    <Text style={amount}>
                {' '}amount
                  </Text>
              ;{'\n'}{'}'}
            </Text>
            {'\n'}{'\n'}

            {/* the second var depositFunc */}
            var
            <Text style={variable}>
              {' '}depositFunc{' '}
            </Text>
            =
            <Text style={variable}>
              {' '}function(
              <Text style={amount}>
                amount
              </Text>
              ){'{'}{'\n'}
              <Text style={object}>
                {' '}{' '}this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              {' '}={' '}
              <Text style={object}>
                this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              {' '}+
              <Text style={amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}return ‘
              <Text style={text}>
                Your balance after this deposit is:{' '}
              </Text>
              ‘ +{' '}
              <Text style={object}>
                this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              ;{'\n'}
              {'}'}{'\n'}{'\n'}
            </Text>

            {/* the third var checkBalanceFunc */}
            var
            <Text style={variable}>
              {' '}checkBalanceFunc{' '}
            </Text>
            =
            <Text style={variable}>
              {' '}function( ){'{'}{'\n'}
              {' '}{' '}return ‘
              <Text style={text}>
                Your balance is:{' '}
              </Text>
              ‘ +{' '}
              <Text style={object}>
                this
              </Text>
              .
              <Text style={balance}>
                balance
              </Text>
              ;{'\n'}{'}'}
            </Text>
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
    color: 'black'
  },
  boldText: {
    fontWeight: 'bold'
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  variable: {
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
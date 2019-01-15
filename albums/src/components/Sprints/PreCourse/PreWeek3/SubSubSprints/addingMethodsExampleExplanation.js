import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class AddingMethodsExampleExplanation extends Component {
  render() {
    const { boldHeader, text,bold, func, balance, closure, amount, withdraw, iv } = Styles;

    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Explanation:{'\n'}
          </Text>
          accout3= addingMethod(300)accout4= addingMethod(400)if I call accout3 or 4 it will return to me and object have function inside each key like thisnow if I want to excuse each one you can understand it like thisaccount3 and 4 is and variable inside it function return to me an object so it is objectremember how can reach key inside object?By the name of the object .  The name of the keyso account3.withdraw it will give as the function but I need to execute itso account3.withdraw (50)it will give me the return success withdraw 50 and the balance is 250what about account4. balanceyes 400 so each one of them is separated than the other it is likethey are a copy from the function addingMethod

          <Text style={func}>
            We have a function called closure it is take{' '}
          </Text>
          <Text style={balance}>
            an initial value{' '}
          </Text>
          and it is return =>{' '}
          <Text style={withdraw}>
            a function called withdraw and this function return =>{' '}
          </Text>
          Success to withdraw +{' '}
          <Text style={amount}>
            the amount you want to withdraw
          </Text>
          ,{' '}OR Failed to withdraw +{' '}
          <Text style={amount}>
            the amount you want to withdraw
          </Text>
          .{'\n'}{'\n'}So lets make some lines and explain it:{'\n'}var{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          ={' '}
          <Text style={func}>
            closure(
            <Text style={balance}>
              100
            </Text>
            ){'\n'}
          </Text>
          var{' '}
          <Text style={withdraw}>
            account2{' '}
          </Text>
          ={' '}
          <Text style={func}>
            closure(
            <Text style={balance}>
              200
            </Text>
            ){'\n'}
          </Text>
          These lines make a two copy from the function{' '}
          <Text style={func}>
            closure{' '}
          </Text>
          but with{' '}
          <Text style={balance}>
            initial value 100 and 200{' '}
          </Text>
          now if I call{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          what I will get?{'\n'}Another function called{' '}
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          but again with{' '}
          <Text style={balance}>
            initial value 100{' '}
          </Text>
          not 200.{'\n'}{'\n'}
          {/* extra explanation */}
          Now remember if you want to execute a function you will write the name of the function then parentheses.{'\n'}
          So account1 or account2 is a varibles inside them a function, lets execute acccount1 now by the way we said:{'\n'}{'\n'}
          <Text style={withdraw}>
          acccount1(
            <Text style={balance}>
              5
            </Text>
            )
          </Text>
          ,{' '}now what will happened?{'\n'}
          This line will execute the function{' '} 
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          that is inside the variable{' '}
          <Text style={withdraw}>
            account1{' '}
          </Text>
          with the argument{' '}
          <Text style={balance}>
            5
          </Text>
          .{'\n'}Now what is the output?{'\n'}{'"'}
          Success withdraw{' '}
          <Text style={balance}>
            5
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            95
          </Text>

          {/* account2 */}
           .{'\n'}{'\n'}What about if I execute{' '}
           <Text style={withdraw}>
          acccount2(
            <Text style={balance}>
              35
            </Text>
            )
          </Text>
          ?{'\n'}The same approach it will execute the{' '}
          <Text style={withdraw}>
            withdraw{' '}
          </Text>
          function that is inside the variable{' '}
          <Text style={withdraw}>
            account2{' '}
          </Text>
           and the output will be => {'"'}Success withdraw{' '}
          <Text style={balance}>
            35
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            165
          </Text>
          .{'\n'}{'\n'}
          <Text style={bold}>
            So what we get from the{' '}
            <Text style={func}>
              clouser{' '}
            </Text>
              is separate variable use the same function and return{' '}
            <Text style={withdraw}>
              what this function is returned{' '}
            </Text>
            <Text style={balance}>
              depends on each one values
            </Text>
            .
          </Text>
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
  bold: {
    fontWeight: 'bold',
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
  withdraw: {
    color: '#FF8C00',
  },
  iv: {
    color: '#FF00FF',
  },
});
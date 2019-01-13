import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ClosureExample from '../SubSubSprints/closureExample';
import ClosureExampleExplanation from '../SubSubSprints/closureExampleExplanation';


export default class AbstractClosureDM extends Component {
  render() {
    const topic = 'Closures';
    const introduction = 'A closure is the combination of a function and the lexical environment within which that function was declared.';
    return (
      <Card>
        <CardSection>
          <View style={Styles.headerConetentStyle}>
            <Text style={Styles.headerTextStyle}>
              {topic}
            </Text>
          </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 150, width: 300 }}
            source={require('../assets/closure.png')} />
        </CardSection>

        <CardSection>
          <Text style={Styles.text}>
            {introduction}
          </Text>
        </CardSection>

        <CardSection  >
          <Text style={Styles.boldText}>
            Let's take an example and break it down:
          </Text>
        </CardSection>

        <ClosureExample />

        <ClosureExampleExplanation />

        
        <CardSection  >
          <Text style={Styles.boldText}>
          Now what if we want to return many functionwhat we can use?We can use an object and each key have a fucntionso now the same function but return objectand this object as we said have many keys each one of themis a functionso if I make accout3= addingMethod(300)accout4= addingMethod(400)if I call accout3 or 4 it will return to me and object have function inside each key like thisnow if I want to excuse each one you can understand it like thisaccount3 and 4 is and variable inside it function return to me an object so it is objectremember how can reach key inside object?By the name of the object .  The name of the keyso account3.withdraw it will give as the function but I need to execute itso account3.withdraw (50)it will give me the return success withdraw 50 and the balance is 250what about account4. balanceyes 400 so each one of them is separated than the other it is likethey are a copy from the function addingMethod
          </Text>
        </CardSection>
        <CardSection  >
          <Text style={Styles.boldText}>
          Here the same but we return and object 
function addingMethod(initial) {'{'}
  var balance=initial
  var S = {'{'}
    balance: initial,
    withdraw: function (amount) {'{'}
      if (S.balance - amount >= 0) {'{'}
        S.balance = S.balance - amount;
        return 'Withdraw: ' + amount;
        {'}'}
      return 'Insufficient funds.';
      {'}'},
    show: function show1() {'{'}
      return 'Balance: ' + balance;
      {'}'}
      {'}'}
  return S
{'}'}
          </Text>
        </CardSection>
        {/* <CardSection >
          <Image
            style={{ width: 340, height: 125 }}
            source={require('../assets/reduceWithIV.png')} />
        </CardSection> */}



        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('OOP')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Reduce')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
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
  boldText: {
    fontWeight: 'bold',
    color: 'black'
  },
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

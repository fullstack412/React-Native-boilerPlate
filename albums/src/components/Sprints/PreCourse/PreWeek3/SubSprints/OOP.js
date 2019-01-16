import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from '../SubSubSprints/reduceSyntax';
import ReduceSyntaxExplanation from '../SubSubSprints/reduceSyntaxExplanation';
import ReduceExample from '../SubSubSprints/reduceExample';

export default class OOP extends Component {
  render() {
    const topic = 'OOP';
    const introduction = 'OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.';
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

        <CardSection  >
          <Text style={Styles.boldText}>
            function oop(initial) {'{'}
            var S = {'{}'}
            S.balance = initial;
            S.withdraw = withdraw1;
            S.show = show1;
            return S
{'}'}
            var show1 = function () {'{'}
            console.log("this here is: ", this)
            return 'Balance: ' + this.balance;
{'}'}
            var withdraw1 = function (amount) {'{'}
            if (this.balance - amount >= 0) {'{'}
            this.balance = this.balance - amount;
            return 'Withdraw: ' + amount + " Balance: " + this.balance;
{'}'}
            return 'Insufficient funds.';
{'}'}
          </Text>
        </CardSection>
        <CardSection  >
          <Text style={Styles.boldText}>
            Now we will develop the function that we didbefore we have problem about each time we make a new variable from the function it will take another copy from it and this thing will use a lot of space in big scaleso lets think in a way to decrease this spacemake the function outside and to reach them by the objectwe but them in the key of tis objectbut now how we can pass the value from this object to the function are outsideso here where we will use the keyword “this”what is this?It is a keyword represent the object in the left of the dot (the one who called this function) [90% the time]
          </Text>
        </CardSection>

        {/* <CardSection >
          <Image
            style={{ width: 340, height: 125 }}
            source={require('../assets/reduceWithIV.png')} />
        </CardSection> */}

        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Closures And Adding Methods')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('HTML, CSS and jQuery')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
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
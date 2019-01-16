import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ClosureExample from '../SubSubSprints/closureExample';
import ClosureExampleExplanation from '../SubSubSprints/closureExampleExplanation';
import AddingMethodsExample from '../SubSubSprints/addingMethodsExample';
import AddingMethodsExampleExplanation from '../SubSubSprints/addingMethodsExampleExplanation';

export default class AbstractClosureDM extends Component {
  render() {
    const topic = 'Closures, Adding Methods';
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

        {/* Adding Methods */}
        <CardSection  >
          <Text style={Styles.boldText}>
          Now what if we want to return many functions what we can return?{'\n'}
          We can return an object and each key inside it has a fucntion, 
          so now lets improve the clouser and add methods to it.
          
          </Text>
        </CardSection>

        <AddingMethodsExample/>

        <AddingMethodsExampleExplanation/>

        <CardSection  >
          <Text style={Styles.boldText}>
          accout3= addingMethod(300)accout4= addingMethod(400)if I call accout3 or 4 it will return to me and object have function inside each key like thisnow if I want to excuse each one you can understand it like thisaccount3 and 4 is and variable inside it function return to me an object so it is objectremember how can reach key inside object?By the name of the object .  The name of the keyso account3.withdraw it will give as the function but I need to execute itso account3.withdraw (50)it will give me the return success withdraw 50 and the balance is 250what about account4. balanceyes 400 so each one of them is separated than the other it is likethey are a copy from the function addingMethod

          </Text>
        </CardSection>
        {/* <CardSection >
          <Image
            style={{ width: 340, height: 125 }}
            source={require('../assets/reduceWithIV.png')} />
        </CardSection> */}
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Reduce')}>
            Previous
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('OOP')}>
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

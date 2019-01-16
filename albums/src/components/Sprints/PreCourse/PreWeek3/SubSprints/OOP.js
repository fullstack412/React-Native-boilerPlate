import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import OOPExample from '../SubSubSprints/OOPExample';
import OOPExampleExplanation from '../SubSubSprints/OOPExampleExplanation';

export default class OOP extends Component {
  render() {
    const topic = 'OOP';
    const introduction = 'OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.';
    const { headerConetentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, boldText, boldHeader, text,func, variable } = Styles
    return (
      <Card>
        <CardSection>
          <View style={headerConetentStyle}>
            <Text style={headerTextStyle}>
              {topic}
            </Text>
          </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 150, width: 300 }}
            source={require('../assets/OOP.png')} />
        </CardSection>

        <CardSection>
          <Text style={text}>
            {introduction}
          </Text>
        </CardSection>
        <CardSection  >
          <Text style={text}>
            <Text style={boldText}>
              Now here we will improv the function that we takes before.{'\n'}
            </Text>
            We said that we have a problem, so what is this problem?{'\n'}
            <Text style={boldText}>
              The problem is each time we make a new variable from the function
              it will take another copy from it and this problem will use
              a lot of space in a big scale.{'\n'}{'\n'}
            </Text>

            So lets think in a way to decrease this space.{'\n'}
            1- Put the{' '}
            <Text style={variable}>
              functions{' '}
            </Text>
            outside to have it one time no matter how much we make copies from the{' '}
            <Text style={func}>
              main function
            </Text>
            .{'\n'}
            2- Reach this functions by pass thier name inside the key in the object that we returnd.{'\n'}
            <Text style={boldText}>
              <Text style={variable}>
                But we have a problem, can you guess what is it?{'\n'}
              </Text>
              It is about how we can pass the value from this object to the functions are outside.{'\n'}
            </Text>
            So to solve this problem we will use the keyword{' '}
            <Text style={boldText}>
              “this”
            </Text>
            ,what is the keyword{' '}
            <Text style={boldText}>
              “this”{' '}
            </Text>
            ?{'\n'}
            <Text style={[variable, boldText]}>
              [90% of the time] It represents the object in the left of the dot (the one who called this function).
            </Text>
          </Text>
        </CardSection  >

        <CardSection  >
          <Text style={boldText}>
            Let's take an example and break it down:
          </Text>
        </CardSection>

        <OOPExample />

        <OOPExampleExplanation />

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
  func: {
    color: 'green',
  },
  variable: {
    color: 'red',
  },
});
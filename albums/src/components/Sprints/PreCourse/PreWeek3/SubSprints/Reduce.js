import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Reduce extends Component {

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'Reduce, Improve reduce';
    const introduction = 'The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.';
    const body = [
      [
        'array.reduce(cb(acc,elem,i), iv)', 
        'don’t forget to use return inside the cb\n\
cb (callback): Function to execute on each element in the array.\n\
acc (accumulator): The accumulator accumulates the callback\'\s return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.\n\
elem (currentValue): The current element being processed in the array.\n\
i (currentIndexOptional): The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.\n\
iv (initialValueOptional): Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.'
      ]
    ]
    const end = '[0,1,2,3,4].reduce(function(acc,elem,i){ return acc+elem })';

    return (
      
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
          {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[0][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[0][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            {end}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Project')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
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
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
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
    fontWeight: 'bold'
  }
});
export default Reduce;
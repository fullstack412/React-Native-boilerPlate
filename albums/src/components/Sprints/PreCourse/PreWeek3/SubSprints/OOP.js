import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class OOP extends Component {

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'OOP';
    const introduction = '';
    const body = [
      [
        'The same but we make the function outside and to reach the object we use word "this"', 
        'function oop(initial) {\n\
          var S = {}\n\
          S.balance = initial;\n\
          S.withdraw = withdraw1;\n\
          S.show = show1;\n\
          return S\n\
          }\n\
          var show1 = function () {\n\
          console.log("this here is: ", this)\n\
          return "Balance: " + this.balance;\n\
          }\n\
          var withdraw1 = function (amount) {\n\
          if (this.balance - amount >= 0) {\n\
          this.balance = this.balance - amount;\n\
          return "Withdraw: " + amount + " Balance: " + this.balance;\n\
          }\n\
          return "Insufficient funds.";\n\
          }'
      ],
    ]

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
          <Button onPress = {()=>this.props.navigation.navigate('Closures And Adding Methods')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('HTML, CSS and jQuery')}>
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
export default OOP;
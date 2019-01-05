import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class AbstractClosureDM extends Component {

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'Clousers + Adding Methods';
    const introduction = '';
    const body = [
      [
        'Here we have a function return another function', 
        'function closuer(initial) {\n\
            var balance = initial;\n\
            function withdraw(amount) {\n\
              if (balance - amount >= 0) {\n\
                balance = balance - amount;\n\
                return "Withdraw: ";\n\
              }\n\
              return "Insufficient funds.";\n\
            }\n\
            return withdraw;\n\
          }'
      ],
      [
        'Here the same but we return and object', 
        'function addingMethod(initial) {\n\
            var balance=initial\n\
            var S = {\n\
              balance: initial,\n\
              withdraw: function (amount) {\n\
                if (S.balance - amount >= 0) {\n\
                  S.balance = S.balance - amount;\n\
                  return "Withdraw: " + amount;\n\
                }\n\
                return "Insufficient funds.";\n\
              },\n\
              show: function show1() {\n\
                return "Balance: " + balance;\n\
              }\n\
            }\n\
            return S\n\
          }'
      ]
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
          <Text style={ boldText }>
            {body[1][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[1][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Reduce')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('OOP')}>
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
export default AbstractClosureDM;
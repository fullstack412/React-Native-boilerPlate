import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Variables extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headerConetentStyle, headerTextStyle } = Styles;
    const topic = "Variables in JavaScript";
    const introduction = 'This section is dedicated to reviewing variable declarations in JavaScript';
    return (
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}{"\n"}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
            Introduction:{"\n"}{introduction}{"\n"}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Variables in JavaScript are declared with "var", followed by the name of the variable (always lower case and written in camelCase), the "=" assignment operator, and finally the value you're assigning the variable to.
            {"\n"}
            For example: 
            {"\n"}
            var firstName = "Hugh";
            {"\n"}
            var lastName = "Bosely";
            {"\n"}
            Those are both examples of proper variable declarations. You can also declare a variable without assigning it to anything.
            {"\n"}
            var fullName;
            {"\n"}
            In this case, if you logged "fullName" to the console, the console would return "undefined". If later in my code, I wrote something like...
            {"\n"}
            fullName = "Hugh Bosely"
            {"\n"}
            Then, when I logged fullName to the console, it would return "Hugh Bosely".
            {"\n"}
            Where you declare your variables in JavaScript is also very important. Variables declared inside of functions are only accessible inside of those functions. 
            Variables declared outside of functions are accessible anywhere in your code. This region outside of functions is called 
            the global scope. Functions have what is called their own local scope. Scope is a term you will hear about a lot in JavaScript, but for now,
            we are just introducing the basics. Here are some examples on how local and global scope can affect your variable declarations:
            {"\n"}
            {
            `var number = 4;
             function writeAString() {
              console.log(number);
              var str = "This is a string";
              console.log(str)
              return str;
            }
            writeAString();
            console.log(number);
            console.log(str);
            `
            }
            {"\n"}
            In the example above, the console would log the following in this order:
            {"\n"}
            4
            {"\n"}
            "This is a string"
            {"\n"}
            4
            {"\n"}
            ReferenceError: str is not defined;
            {"\n"}
            The first console log would log a "4" because the variable "number" was declared in the global scope and is therefore accessible everywhere, including inside the local scope of the function.
            {"\n"}
            The second console log would log "This is a string" because "str" is declared in the local scope of the function and the second console.log is in the local scope of the function.
            {"\n"}
            The third console log would log a "4" again because the variable "number" as well as the console log is in the global scope.
            {"\n"}
            The final console log would return a reference error because "str" is only available within the local scope of the function and the computer is attempting to access "str" from outside of the local scope.
            Since "str" is not available in the global scope, the console log results in a Reference Error.
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCWeek2')}>
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
  }
});

export default Variables;
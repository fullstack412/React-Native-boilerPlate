import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../common';
import { Card } from '../../../common';
import { CardSection } from '../../../common';

class Main extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    // const topic = 'Pre-course Week 4'
    // const introduction = 'This gives us a drawer navigator with a list of navigation items.';
    // const body = 'For limited customisation we can use DrawerItems component provided by react-navigation in contentComponent. In case we want to update the styles of the drawer, make it scrollable or add a header/footer we can still achieve it by using the DrawerItems. It will handle the navigation on its own. Below is an example of how to achieve it.';
    // const end = 'This guide covers the various navigation components available in React Native. If you are just getting started with navigation, you will probably want to use React Navigation. React Navigation provides an easy to use navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both iOS and Android.'
    const topic = 'Frequently Ask Questions'
    const introduction = 'Use your computer to study';
    const body = 'The smartest';
    const end = 'Google it'
    
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
        How should I study for RBK?{"\n"}{introduction}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Who is Fatema:{"\n"}{body}{"\n"}
        </Text>
      </CardSection>

      <CardSection>
        <Text>
          Where is RBK:{"\n"}{end}{"\n"}
        </Text>
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
export default Main;
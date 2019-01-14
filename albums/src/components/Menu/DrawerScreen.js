import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Platform} from 'react-native';
import { DrawerActions } from 'react-navigation';

class DrawerScreen extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    const { menuItem } = Styles

    return (
      <View>
        <ScrollView>
          <View>
            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>

            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('JavaScript Fundamentals and Functions')}>
                Week 1
              </Text>
            </View>

            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Objects')}>
                Week 2
              </Text>
            </View>

            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Reduce')}>
                Week 3
              </Text>
            </View>

            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Git')}>
                Week 4
              </Text>
            </View>

            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Quiz')}>
                Overall Quiz
              </Text>
            </View>
            
            <View style={menuItem}>
              <Text onPress={this.navigateToScreen('Login')}>
               Login
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  menuItem:{
    padding: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});


export default DrawerScreen;

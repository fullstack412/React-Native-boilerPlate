import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    const { container, sectionHeadingStyle, navSectionStyle, navItemStyle, footerContainer, drawerStyle, picStyle } = Style;
    return (
      <View style = {container}>
        <View style = { drawerStyle }>
          <Image source = {require('../../assets/profile.jpg')} style = { picStyle } />
        </View>
        <ScrollView>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('Prep_Course_Sprints')}>
                Prep Course Menu
              </Text>                
              {/* <Text style={navItemStyle} onPress={this.navigateToScreen('Prep_Week_1')}>
                Week 1
              </Text>
              <Text style={navItemStyle} onPress={this.navigateToScreen('Prep_Week_2')}>
                Week 2
              </Text>
              <Text style={navItemStyle} onPress={this.navigateToScreen('Prep_Week_3')}>
                Week 3
              </Text>
              <Text style={navItemStyle} onPress={this.navigateToScreen('Prep_Week_4')}>
                Week 4
              </Text> */}
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('JS_Sprints')}>
                Javascript Sprints Menu
              </Text>
              {/* <Text style={navItemStyle} onPress={this.navigateToScreen('JSDataStructure')}>
                Data Structure
              </Text> */}
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('Full_Stack_Sprints')}>
                Full Stack Sprints Menu
              </Text>
              {/* <Text style={navItemStyle} onPress={this.navigateToScreen('JSDataStructure')}>
                Place Holder
              </Text> */}
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('Other_Sprints')}>
                Other Sprints Menu
              </Text>
              {/* <Text style={navItemStyle} onPress={this.navigateToScreen('JSDataStructure')}>
                Place Holder
              </Text> */}
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('FAQ')}>
                FAQ
              </Text>
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('Contact')}>
                Contact
              </Text>
            </View>
          </View>
          <View>
            <View style={sectionHeadingStyle}>
              <Text style={navSectionStyle} onPress={this.navigateToScreen('Log_In')}>
                Log In
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={footerContainer}>
          {/* <Text>Click on your Sprint to View</Text> */}
          <TouchableOpacity>
            <Text onPress = {() => {Linking.openURL('http://rbk.org')}}>RBK.org</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },
  drawerStyle: {
    height: 150, 
    backgroundColor: 'pink', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  picStyle: {
    height: 120, 
    width: 120, 
    borderRadius: 60
  }
});

export default SideMenu;
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform, Picker, Alert } from 'react-native';
import { Card, CardSection, Header, Button, Animbutton } from '../../common';
import Icon from 'react-native-vector-icons/Ionicons';



class CourseDetail extends Component {
  renderPicker() {
    return this.props.info.menuOptions.map(element => (
      <Picker.Item label={element} value={element} key = {element}/>
    ))
  }

  render() {
    const { topic, introduction, image, button, menuOptions } = this.props.info;
    const { gotoButton } = this.props;
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, pickerContainerStyle } = Styles;
    return (
      <Card>
        <CardSection>
          <View style = {thumbnailContainerStyle}>
              <Image 
                style = {thumbnailStyle} 
                source = {image}
              />
          </View>
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
          <Picker
            style = { pickerContainerStyle }
            onValueChange={(itemValue) => gotoButton(itemValue)} >
            <Picker.Item label="Select Options" value = "DropDown" /> 
            { this.renderPicker() }
          </Picker>
        </CardSection>


        {/* <CardSection>
          <TouchableOpacity>
            <Icon size = {30} name= "ios-trash" color = "red"/>
          </TouchableOpacity>
        </CardSection>	 */}
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
  pickerContainerStyle: {
    flex: 1,
    justifyContent: "center",
    margin :30
  }
});

export default CourseDetail;
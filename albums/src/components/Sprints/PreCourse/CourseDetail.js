import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform, Picker, Alert } from 'react-native';
import { Card, CardSection, Header, Button, Animbutton } from '../../common';
import Icon from 'react-native-vector-icons/Ionicons';



const CourseDetail = (props) => {
  const { topic, introduction, image, button, menuOptions } = props.info;
  const { gotoButton } = props;
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
        { renderPicker() }
        {/* <Picker
          style = { pickerContainerStyle }
          onValueChange={(itemValue) => gotoButton(itemValue)} >
          <Picker.Item label="Select Options" value = "DropDown" /> 
          <Picker.Item label={menuOptions.option1} value={menuOptions.option1} />
          <Picker.Item label={menuOptions.option2} value={menuOptions.option2} />
          <Picker.Item label={menuOptions.option3} value={menuOptions.option3} />
          <Picker.Item label={menuOptions.option4} value={menuOptions.option4} />
          <Picker.Item label={menuOptions.option5} value={menuOptions.option5} />
          <Picker.Item label={menuOptions.option6} value={menuOptions.option6} />
        </Picker> */}
      </CardSection>
      
      {/* <CardSection>
        <Button onPress = {()=> gotoButton(button)}>
          Go To Page
        </Button>
        <Animbutton onColor={"blue"} effect={"bounce"} _onPress={(status) => {}} text="Bounce" />
      </CardSection>	 */}

      {/* <CardSection>
        <TouchableOpacity>
          <Icon size = {30} name= "ios-trash" color = "red"/>
        </TouchableOpacity>
      </CardSection>	 */}
    </Card>
  );
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
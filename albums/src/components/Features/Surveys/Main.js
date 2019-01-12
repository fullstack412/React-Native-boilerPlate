import React, { Component } from 'react';
import { Alert, TextInput, StyleSheet, TouchableOpacity, Text, View, Picker } from 'react-native';
import { Header, Button, Card, CardSection } from '../../common';
import firebase from 'firebase';
import api from '../../../../';
import MultipleChoice from 'react-native-multiple-choice';

class Main extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, container } = Styles;
    const topic = 'Emotional Survey'
    const introduction = 'Your emtional health is very important to us';
    
    return (
      <Card>
        <Header />
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}{"\n"}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
            {introduction}
          </Text>
          <View style={container}>
            <MultipleChoice
              options={[
                'Super Happy',
                'Happy',
                'Doing Okay',
                'Upset',
                'Sad'
              ]}
              selectedOptions={['Doing Okay']}
              maxSelectedOptions={1}
              onSelection={(option)=>{
                Alert.alert(option + ' was selected!')
              }}
            />
          </View>
        </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('Calendar')}>
              Calendar
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('TownHall')}>
              TownHall
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('Handbook')}>
              Student Handbook
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
  container: {
    marginTop: 60,
    margin: 20
  }
});
export default Main;
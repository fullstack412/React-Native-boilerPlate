import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Card, CardSection } from '../common';

class Contact extends Component {

  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Contact'
    const introduction = '07911122233';
    const body = 'AlexMercer@test.com';
    const end = 'In a building'
    
    return (
      <Card>
        <Header />
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            If you have any questions, please contact us between 9 am and 5 pm from Sunday through Thursday. Our offices are closed for public holidays, but you can still email us.
          </Text>
        </CardSection>

        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            Phone: {"\n"}
            <Text style={{fontWeight:'normal'}}>
              +(962) 7 9777 1441
            </Text>
          </Text>
        </CardSection>

        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            Email: {"\n"}
            <Text style={{fontWeight:'normal'}}> 
              info@rbk.org
            </Text>
          </Text>
        </CardSection>

        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            Address: {"\n"}
            <Text style={{fontWeight:'normal'}}>
              Khalda 19 Zarkashi Street Building 19 Amman, Jordan.
            </Text>
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
export default Contact;
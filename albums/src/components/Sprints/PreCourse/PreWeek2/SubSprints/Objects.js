import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';


class Objects extends Component{
  constructor(props){
      super(props)
     
  }
  render(){
    const topic= 'Objects';
    const introduction = 'Objects are variables , A JavaScript object is a collection of unordered properties.'
    
      return(
        <Card>
            <CardSection>
                <View>
                    <Text>
                    {topic}{"\n"}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <Text>
                    what is Objects? {"\n"}{introduction}{"\n"}
                </Text>
            </CardSection>
        </Card>
      )
  }
}

const Styles=StyleSheet.create({

})

export default Objects
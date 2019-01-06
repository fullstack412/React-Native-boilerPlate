import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

class DataModeling extends Component{
  constructor(props){
      super(props)
     
  }
  render(){
    const topic='Data Modeling';
    const Define='Data modeling is a method to create multiple models of an object using a factory function. It\s like cloning robots.';
    const Factory='The function that produces the models is a factory function. \
The object that the factory created holds the properties of the factory function. \
You can also add some other properties that are unique for the newly produced object. \
Like a real life car factory, every car are almost identical. However, there are small changes applied to some cars. \
For example, heated seat for this car, additional lights for the other car, no cup holder for those 5 cars';
    const function1='function makePerson(firstName, id){\n    return {\n        firstName:firstName,\n        id:id \n    }\n}';
    const UseFactoryFun='We can use the factory function instead of creating a new object every single time.\nCreating the first person object: ';
    const function21='var Person1 = makePerson("Tal", 0)\n';
    const function22='var studentName = [\'Tal\',\'Besslan\',\'Jozaa\'];\nfor (var i = 0; i < studentName.length; i++){\n\
    makePerson(studentName[i], i)\n\
}'    
    const function25 = 'var Person1 = {firstName: "Tal", id: 0};\nvar Person2 = {firstName: "Besslan", id: 1};\nvar Person3 = {firstName: "Jozaa", id: 2};\n'
    const MakeDisplay='You can make other functions that uses the new model you produced from the factory function:';
    const function3='function displayPerson(person){\n    return person.firstName+ "has the ID: " + person.id \n}\ndisplayPerson(Person1);';
    const function4='Because we defined Person1 with makePerson function earlier. Then the output will be: \n';
    const { thumbnailStyle,title,container,textContainer,thumbnailStyle1}=Styles;
    return(
      <Card>
        <CardSection>
        <View>
            <Text style={title}>
              {topic}{"\n"}
            </Text>
          </View>
        </CardSection>
        <CardSection style={container} >
          <Text style={{fontWeight:'bold'}}>
            What Is Data Modeling?{"\n"}{"\n"}
            <Text style={{fontWeight:'normal'}}>
              {Define}
            </Text>
          </Text>
        </CardSection>
        <CardSection style={container}>
          <Image 
          style= {thumbnailStyle1}
          source={require('../../../../../assets/dataModelingRobot.jpg')}/>
        </CardSection>
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            Factory functions: {"\n"}{"\n"}
            <Text style={{fontWeight:'normal'}}>
              {Factory}{"\n"}
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {function1}{"\n"}{"\n"}
              </Text>
              <Text style={{fontWeight:'normal',color:'black'}}>
                {UseFactoryFun} {"\n"}
              </Text>
              
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {function21}{"\n"}
              </Text>
              Creating more than 1 person using for loop (You can also store each of newly created factory object to an array):{"\n"}
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {function22}{"\n"}{"\n"}
              </Text>
              Instead of: {"\n"}
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {function25}{"\n"}
              </Text>
              {MakeDisplay}{"\n"}
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {function3}{"\n"}
              </Text>
              {function4}
              <Text style={{fontWeight:'bold',color:'#BA4A00'}}>
                {"Tal has the ID: 0"}{"\n"}
              </Text>
              
            </Text>
          </Text>
        </CardSection>
        
        {/* <CardSection style={container}>
        <Image 
          style= {thumbnailStyle1}
          source={require('../../../../../assets/Pic9.jpg')}/>
        </CardSection> */}

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Objects')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Higher Order Function: Each')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>
    )
     
  }
}

const Styles=StyleSheet.create({
  container:{
    flexDirection: 'row'
},
textContainer:{
  flex: 1,
  flexWrap: 'wrap'
},
title: {
  fontSize: 19,
  fontWeight: 'bold'

},
thumbnailStyle1:{
  height: 250 ,
  width: 355
  }
})

export default DataModeling
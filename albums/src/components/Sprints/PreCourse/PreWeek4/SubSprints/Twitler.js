import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Twitler extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option3",
            "options" : {
              "option1" : "Java",
              "option2" : "PHP",
              "option3" : "Javascript",
              "option4" : "Python"
            },
            "question" : "React is a ____ library"
          },
          "question2" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "XML",
                "option2" : "YML",
                "option3" : "HTML",
                "option4" : "JSX"
              },
            "question" : "____ tag syntax is used in React"
          },
          "question3" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "Single root DOM node",
                "option2" : "Double root DOM node",
                "option3" : "Multiple root DOM node",
                "option4" : "None of the above"
              },
            "question" : "Application built with just React usually have ____"
          },
          "question4" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "mutable",
                "option2" : "immutable",
                "option3" : "variable",
                "option4" : "none of the above"
              },
            "question" : "React elements are ____"
          },
          "question5" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "functions",
                "option2" : "array",
                "option3" : "components",
                "option4" : "json data"
              },
            "question" : "React allows to split UI into independent and reusable pieses of ____"
          }
        }
      }      
    }
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Project'
    const introduction = 'Project is nice';
    const body = 'Do your best';
    const end = 'The end';

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
          Twitler!!! {"\n"}{introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
          Twitler!!! {"\n"}{body}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            MTwitler!!! {"\n"}{end}{"\n"}
          </Text>
        </CardSection>

        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Testing')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('WebDev')}>
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
export default Twitler;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../common';
import Home from '../CourseList';

class Main extends Component {
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
    const topic = 'Pre-course Week 4'
    const introduction = 'This gives us a drawer navigator with a list of navigation items.';
    const body = 'For limited customisation we can use DrawerItems component provided by react-navigation in contentComponent. In case we want to update the styles of the drawer, make it scrollable or add a header/footer we can still achieve it by using the DrawerItems. It will handle the navigation on its own. Below is an example of how to achieve it.';
    const end = 'This guide covers the various navigation components available in React Native. If you are just getting started with navigation, you will probably want to use React Navigation. React Navigation provides an easy to use navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both iOS and Android.';

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

        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCWeek3')}>
            Previous
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
export default Main;
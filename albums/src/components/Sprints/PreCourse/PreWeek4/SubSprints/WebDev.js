import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class WebDev extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option3",
            "options" : {
              "option1" : "Hot Tea Milky Lollipop",
              "option2" : "Hulk Thor Magneto Loki",
              "option3" : "Hypertext Markup Language",
              "option4" : "Hal taqulu Masalama La"
            },
            "question" : "What does HTML stand for?"
          },
          "question2" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "deliver butter",
                "option2" : "perform unit test",
                "option3" : "links HTML with Javascript code",
                "option4" : "adding styles to the website"
              },
            "question" : "What is the purpose of CSS?"
          },
          "question3" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "setInterval(myFunction(){}, 3000);",
                "option2" : "setInterval(myFunction(){}, 3);",
                "option3" : "setTimeout(myFunction(){}, 3000);",
                "option4" : "setTimeout(myFunction(){}, 3);",
              },
            "question" : "Which function performs myfunction every 3 seconds?"
          },
          "question4" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "<script src=\"lib/jquery.js\"></script>",
                "option2" : "<script src=\"src/javascriptYouWrite.js\"></script>"
              },
            "question" : "Which file should you load first in your .html file?"
          }
        }
      }      
    }
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'Web Development';
    const introduction = 'This is your first immersion with Full-stack Development. ';
    const body = [
      [
        'There are three foundations in Web Development', 
        'HTML: defines the content and structure of a website. Think of it as the frame of a car, how many car doors, wheels, windows are needed.\n\
Javascript: provides the interaction for the webpage. If you have a clickable button on the page that alerts a message, they that\'s where Javascript \
comes in. Javascript is not limited to that simple example. In the car example, Javascript will be the connection between the control and the head light, \
air conditioning controller and the air conditioning.   \n\
CSS: decides how the website is going to look. It doesn\'t change the content, but it changes how the content is displayed. For the car example, \
CSS decides the paint color of the car, how big the car windows are \n'
      ],[
        'jQuery Frameworks',
        'Frameworks are powerful tools that build on HTML, CSS, and Javascript. You can build any websites without framework, but using frameworks can significantly \
decrease the complexity of the websites.\n\
jQuery: a Javascript framework\n\
'
      ],[
        'Other Frameworks',
        'React: \n\
Backbone: \n\
Angular: \n'
      ]
    ]
    const end = 'This is your first immersion to become a fullstack developer. If your experience was unpleasant, knowing most of technologies\
you struggle to understand is going to get easier. It takes time to pick up a skill from 0. If you are already having fun, congratulations, you\
might just found a hobby that also pays salary!';
    return (
      
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
          {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[0][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[0][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[1][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[1][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[2][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[2][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[3][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[3][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[4][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[4][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[5][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[5][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {end}{"\n"}
          </Text>
        </CardSection>

        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Testing')}>
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
  },
  boldText: {
    fontWeight: 'bold'
  }
});
export default WebDev;
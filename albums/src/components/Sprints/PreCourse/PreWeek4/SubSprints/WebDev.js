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
    const introduction = 'All websites can be developed by HTML, Javascript, and CSS. Frameworks are introduced to make the development easier.';
    const body = [
      [
        'There are three foundations in Web Development', 
        'HTML: defines the content and structure of a website. Think of it as the frame of a car, how many car doors, wheels, windows are needed.\n\n\
Javascript: provides the interaction for the webpage. If you have a clickable button on the page that alerts a message, they that\'s where Javascript \
comes in. Javascript is not limited to that simple example. In the car example, Javascript will be the connection between the control and the head light, \
air conditioning controller and the air conditioning.   \n\n\
CSS: decides how the website is going to look. It doesn\'t change the content, but it changes how the content is displayed. For the car example, \
CSS decides the paint color of the car, how big the car windows are \n'
      ],[
        'jQuery Framework',
        'Frameworks like jQuery are powerful tools that build on HTML, CSS, and Javascript. \
Programmers use jQuery to simplify the process of designing complex websites.\n\
jQuery builds on Javascript, but it has its own unique syntax.'
      ],[
        'How to import jQuery?',
        'Like any external library, programmers would need to import the library in the HTML page between the <head></head>. \n \
Here are the few ways you can import jQuery:\n\
1. Download jQuery to your local folder (I named it lib in this case) and import it like so \n<script src="lib/jquery.js"></script>\n\
2. Or you can use a jQuery library someone else uploaded online \n<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">\n\n\
They both do imports jQuery, but just getting the jQuery library from different places. Option 1 is like download a movie and then watch it. Option 2 is like streaming a movie online\
'
      ],[
        'Common jQuery functions',
        'find(): Selects elements based on the provided selector string\n\
hide(): Hides an element if it was visible\n\
show(): Shows an element if it was hidden\n\
html(): Gets or sets an inner HTML of an element\n\
append() Injects an element into the DOM after the selected element\n\
prepend() Injects an element into the DOM before the selected element\n\
on(): Attaches an event listener to an element\n\
off() Detaches an event listener from an element\n\
css(): Gets or sets the style attribute value of an element\n\
attr() Gets or sets any attribute of an element\n\
val(): Gets or sets the value attribute of an element\n\
text(): Gets the combined text of an element and its children\n\
each(): Iterates over a set of matched elements'
      ],[
        'Advanced: Other major Frameworks',
        'React: Structure the entire website as a combinations of different components. It\'s like building each car parts on their own, \
car doors, engine, windows, etc. Those components are eventually linked together to build a functional car.\n\n\
Backbone: In backbone, the data, what\'s being displayed on the page, and how data is changed are separated into different layers. \n\n\
Angular: Angular offers another different ways of frontend framework. It works particularly well in formed and document based webapplications\n\n'
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
        {/* <CardSection>
          <Text style={ boldText }>
            {body[5][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[5][1]}
          </Text>
        </CardSection> */}
        <CardSection>
          <Text style={ boldText }>
            Conclusion:
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
  },
  boldText: {
    fontWeight: 'bold'
  }
});
export default WebDev;
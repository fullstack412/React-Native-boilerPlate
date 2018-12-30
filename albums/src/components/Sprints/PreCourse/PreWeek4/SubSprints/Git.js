import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Git extends Component {
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
    const topic = 'Git'
    const introduction = 'Install Git: \n Go to: https://git-scm.com/downloads \
    Click Download for your Operating System: \
    After installation, open the terminal window (command + space), \
    type in “terminal”, open the application like the ones shown below\
    Terminal is the programmer preferred way to navigate around the folders in the desktop\
    Navigate between folders in terminal\
    cd [folder name]: Go inside a folder\
    cd .. : exit current folder\
    dir : display all the files/folders in the current folder (windows) \
    ls : display all the files/folders in the current folder (mac)\
    pwd : display the path to the current file\
    Download/update the code from a repository on your github \n \
    git clone [repo url]: first time \n \
    git pull: after first time \n \
    Other useful Git Commands \n \
    git log: look up previous git commit messages \n \n \
    Three steps process for upload local repository to github \n \
    git add [file] \n \
    git commit -m [descriptive message] \n \
    git push \n '
    const body = 'Git Good.';
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
          Install Git {"\n"}
          {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            How to use git? {"\n"}{body}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            More information: {"\n"}{end}{"\n"}
          </Text>
        </CardSection>

        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Project')}>
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
export default Git;
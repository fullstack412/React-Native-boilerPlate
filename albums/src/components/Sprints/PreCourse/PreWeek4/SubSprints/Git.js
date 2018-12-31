import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Git extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option1",
            "options" : {
              "option1" : "git init",
              "option2" : "git add",
              "option3" : "git push",
              "option4" : "git log"
            },
            "question" : "Which command should you use to initialize a new Git repository?"
          },
          "question2" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "git add",
                "option2" : "git push",
                "option3" : "git init",
                "option4" : "git commit -m 'message"
              },
            "question" : "Which command should you use after git add ."
          },
          "question3" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "git init",
                "option2" : "git log",
                "option3" : "git push",
                "option4" : "git pull",
              },
            "question" : "How to upload your local work to github"
          },
          "question4" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "git init",
                "option3" : "git push",
                "option4" : "git pull",
              },
            "question" : "How to update local git repo with newer version of Github repo?"
          },
          "question5" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "git icecream",
                "option2" : "git push",
                "option3" : "git add .",
                "option4" : "git merge"
              },
            "question" : "How to merge different git branches?"
          }
        }
      }      
    }
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'Git';
    const introduction = 'Git and GitHub are tools to help manage our files. They also help us share our work with other programmers';
    const body = 
    'Install Git: \n Go to: https://git-scm.com/downloads \n\
Click Download for your Operating System:\n\
After installation, open the terminal window (command + space),\n \
type in “terminal”, open the application like the ones shown below\n\
Terminal is the programmer preferred way to navigate around the folders in the desktop\n\n\
Navigate between folders in terminal\n\
cd [folder name]: Go inside a folder\n\
cd .. : exit current folder\n\
dir : display all the files/folders in the current folder (windows) \n\
ls : display all the files/folders in the current folder (mac)\n\
pwd : display the path to the current file\n\n\
Download/update the code from a repository on your github \n \
git clone [repo url]: first time \n \
git pull: after first time \n \
Other useful Git Commands \n \
git log: look up previous git commit messages \n \
git reset --hard [commit ID you found from git log] : go back to the code you wrote in a previous commit \n \n \
Three steps process for upload local repository to github \n \
git add [file] \n \
git commit -m [descriptive message] \n \
git push \n ';
    const end = 'Git is the most popular version control system. You will become more and more familiar with Git and GitHub in the months to come';

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
            {body}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text>
            {end}{"\n"}
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
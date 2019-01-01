import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Testing extends Component {
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
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'Testing';
    const introduction = 'Testing is a method for programmers to understand whether their code produces desired output';
    const body = [
      [
        'Testing Frameworks', 
        'Testing frameworks are tools for programmers to write tests easily.\n\
Instead of writing console.log(desiredOutput === producedOutput), a programmer can use frameworks like Mocha, Chai, Jasmine, Jest\
to simplify their test code.'
      ],[
        'Example',
        'describe(\'This is a test example\', function() {\n\
  it(\'Here is more explanation for the test\', function() {\n\
  expect(2 + 2).to.equal(4);\n\
  });\n\
})\n\n\ This test is to see if 2 + 2 equals to 4, which we think it is. So it will not return any problem to the programmer.\n\
However, if you write expect(5).to.equal(4), then it will return an error for the programmer.'
      ],[
        'What is the point?',
        'We all know that 5 does not equal to 4, and 2 + 2 equals to 4. What is the point for the test?\n\
Fantastic question!\n\
For a second, let\'s think what if you write a function that adds two inputs together.\
And you want the output to be the sum of the two inputs.\
To test if your function works, then you will test your function (we call it myFunction) like below.\n\
describe(\'Testing summation function\', function() {\n\
  it(\'This function will add two inputs\', function() {\n\
  expect(myFunction(2, 2)).to.equal(4);\n\
  expect(myFunction(2, 3)).to.equal(5);\n\
  expect(myFunction(23, 10)).to.equal(33);\n\
  });\n\
})\n\
The point for these tests is to see whether it is doing what you designed to do. \n\
So since you know 2 + 3 = 5 and 23 + 10 = 33. So you set those conditions to check if your \
function works as good as your brain.'
      ]
    ]
    const end = 'In the future sprints, you will encounter a huge amount of test cases. Those tests are designed to lead you to the correct answer\
The more tests you pass, the closer you will became to the end goal.\n\
Treat each of passed test as a small celebration on your journey to become a Full-stack developer';

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
export default Testing;
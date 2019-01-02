import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class Testing extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "Tool Does Development",
              "option2" : "Total Development Disaster",
              "option3" : "Teeth Destroy Dinosaur",
              "option4" : "Test Driven Development"
            },
            "question" : "What does TDD stand for?"
          },
          "question2" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "Write Code",
                "option2" : "Write Test",
                "option3" : "Run Test"
              },
            "question" : "What comes first?"
          },
          "question3" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "it('sample test', function(){})",
                "option2" : "beforeEach(function(){})"
              },
            "question" : "What runs first?"
          },
          "question4" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "describe()",
                "option3" : "it()",
                "option4" : "before()",
              },
            "question" : "What command is used to group multiple test cases together?"
          },
          "question5" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "details how much RAM is dedicated to the current test",
                "option2" : "specify how long the test cases should take",
                "option3" : "identifies each individual test cases",
                "option4" : "a scary movie clown"
              },
            "question" : "What does \"it\" do in testing?"
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
The point for these tests is to see whether myFunction is doing what you designed to do. \n\
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
          {introduction}
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
          <Button onPress = {()=>this.props.navigation.navigate('Git')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Web Development')}>
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
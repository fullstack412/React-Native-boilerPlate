import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Card, CardSection } from '../common';


class Handbook extends Component {
  state = {
    rules: [
      ['NOTES', 'FIRST THING FIRST, Always read the documentation entirely before starting. Go back to it in case of a problem before requesting a helpDesk. For 60% of the helpDesk requests, the answer is in the documentation AND/OR the web.\n\n\
DURING TOY PROBLEM / ASSESSMENTS : Read everything carefully. Sounds basic, right? You\'d be surprised to hear that most of you don\'t even read the question entirely before starting.\n\n\
WHY DO WE INSIST ON THAT? Imagine yourself in an interview and not knowing what the position is about. Imagine yourself in a project where you did not read the client requirements before starting. Imagine yourself asking your manager for something that was already in the documentation. Yup…  it is as bad as it sounds.'
      ], [
        'TOY PROBLEM', 'The toy problem is meant to teach you algorithmic skills and critical thinking. Toy problems will help you get hired, and do well in your job. Job interviews often include a toy problem to solve live. You want to be fully prepared and confident.\n\n\
What resources am I allowed to use during the Toy Problem?\n\
- First thing first, start by reading the readme or the question carefully!\n\
- You cannot use tools that allow you to communicate directly with other students or engineers (like Slack, Messages, WhatsApp, Emails, etc.), or anything that was already created.\n\
- You must pseudocode before writing your code. If your code contains an error, we still want to understand your logic.\n\
- THE ONLY RESOURCES YOU CAN USE ARE:\n\
    - Mozilla MDN\n\
    - W3Schools\n\
    - Library Documentation if it was used (ex: jQuery Documentation - Official Website)\n\
    - Wikipedia\n\
- RESOURCES YOU CANNOT USE:\n\
    - Everything else (Stackoverflow, friend code … etc)'
      ], [
        '(WEEKLY) ASSESSMENTS', 'These assessments are meant to judge how well you are doing for both yourself & staff. Knowing where are you weak and where you\'re strong is important for learning.\n\n\
What resources am I allowed to use during the Technical Assessment?\n\
- First thing first, start by reading the readme or the question carefully!\n\
- You must pseudocode before writing your code. If your code contains an error, we still want to understand your logic.\n\
- You cannot use any tools that allow you to communicate directly with other students or engineers, or anything that was created at Hack Reactor (course materials, hackathon content, class notes, slide decks, etc.). Each challenge that you are given on the assessment will provide guidelines for you about what online resources you are allowed to use in support of completing that challenge. If you are unsure at all about whether or not you are allowed to use a particular resource, ask an HiR or the Tech Mentor.'
      ], [
        'WHAT IS CHEATING?\n\nUsing code that is not yours is cheating yourself from learning.\
Anything that tricks us into thinking you know something you don\'t is cheating. Use common sense, if it feels like cheating, it probably is.', 'The reason we have these rules is so you learn as much as you can, and we know what you are learning and what you did not learn.\n\
So, what is cheating?\n\
- Using any resource that is not mentioned above!\n\
- Looking at your previous code solution during assessments (ex: sprint solution).\n\
- Copy and paste more than one line of code (Even during the sprints).\n\
- Looking at someone else\'s screen on anything other than the sprint!\n\
- Slacking Code (Toy problem, Weekly assessment, sprints solution, checkpoint)\n\
- Doing the toy problem or weekly assessment with help of someone.\n\
- Note: you can share your sprints solution ONLY with your pair using GitHub.\n\
Now, how do we know you actually read this? If you did, send us your favorite song using a Youtube link to a channel we created on Slack called “secondreadersplaylist”. And keep up, what you\'re doing is really important. You still have a little bit more to read below...'
      ], [
        'HELP DESK', 'Before asking for help desk make sure that you did the following:\n\
- Make sure you read the readme.\n\
- Make sure that your question\'s answer is not in the readme.\n\
- Ask your pair\n\
- Read the test to see exactly what it\'s looking for\n\
- Try to run your code on the console and come up with the smallest code that causes the problem\n\
- Test your function(s) in the console (via a debugger statement)\n\
- Use debugger to inspect your call stack\n\
- Copy/paste your error into google.com\n\
- Enter an intelligent question (precisely explaining your problem) on google.com // helpdesk.\n\
- Note: You may wait for 30 ~ 120 minutes to get help from HiR.\n\
- Don\'t stop trying and looking for the answer until you get help.'
      ]
    ]
  }

  mapOutHandBook() {
    return this.state.rules.map(element => (
      <CardSection key = {element[0]}>
        <Text style={{fontWeight:'bold'}}>
          {element[0]}{"\n"}{"\n"}
          <Text style={{fontWeight:'normal'}}>
            {element[1]}
          </Text>
        </Text>
      </CardSection>
    ))
  }
  
  render() {
  
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    const topic = 'RBK Student Handbook'
    const introduction = 'Don\'t be late';
    const body = 'No Copy';
    const end = 'Be respectful'
    
    return (
      <Card>
        <Header />
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            RBK STUDENT WIKI
          </Text>
        </CardSection>
        {this.mapOutHandBook()}
        <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('Calendar')}>
              Calendar
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('Surveys')}>
              Surveys
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress = {()=>this.props.navigation.navigate('TownHall')}>
              TownHall
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
export default Handbook;
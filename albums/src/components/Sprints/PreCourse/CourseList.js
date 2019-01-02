import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import { Header, Button } from '../../common';
// import { Button } from '../../common';
// import { Header, Left, Right, Icon} from 'native-base';

import CourseDetail from './CourseDetail';

class CourseList extends Component {
  state = { 
    courses: [{
      topic: 'Prep Week 1', 
      introduction: 'Function, booleans, comparisons, logical operators, repetition, variables, while loop, array, for', 
      image: require('../../../assets/loop.png'),
      body: {
        intro: '' 
      },
      // put subsprint stack navigator name in menuOptions array
      menuOptions: [
        'JavaScript Fundamentals and Functions', 
        'Booleans, Comparisons, and Operators', 
        'Variables and Repetition in JavaScript', 
        'While Loop', 
        'Arrays and For Loops'
      ]
    }, {
      topic: 'Prep Week 2',
      introduction: 'Objects, Data Modeling, Higher Order Function, each function, map function, filter function',
      image: require('../../../assets/html.png'),
      body: {
        intro: ''
      },
      menuOptions: [
        'Objects', 
        'DataModeling',
        'HigherOrderEach', 
        'Map', 
        'Filter'
      ]
    }, {
      topic: 'Prep Week 3',
      introduction: 'Reduce, Abstraction, Closure, Data Modeling, OOP, HTML, CSS, jQuery',
      image: require('../../../assets/git.png'),
      body: { 
        intro: ''
      },
      menuOptions: [
        'Git', 
        'Project', 
        'Revision', 
        'Testing', 
        'Twitler', 
        'WebDev'
      ]      
    }, {
      topic: 'Prep Week 4',
      introduction: 'Web Development, Git, Twitler, Testing, Revision, Project',
      image: require('../../../assets/javascript.png'),
      body: {
        intro: ''
      },
      menuOptions: [
        'Git', 
        'Project', 
        'Revision', 
        'Testing', 
        'Twitler', 
        'WebDev'
      ]
    }
  ]};

   // componentWillMount() {
   // 	axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   // 		.then(
   // 			response => this.setState({courses: response.data})
   // 		)
   // }

  mapOutCourses() {
    return this.state.courses.map(element => (
      <CourseDetail key = {element.topic} info = {element} gotoButton = {this.gotoButton.bind(this)}/>
    ))
  }

  gotoButton(btn) {
    this.props.navigation.navigate(btn);
  }

  render() {
    return (
      <ScrollView>
        <Header onPress = {this.props.navigation.openDrawer.bind(this)}/>
        {this.mapOutCourses()}
      </ScrollView>
    );
  }
}

export default CourseList;

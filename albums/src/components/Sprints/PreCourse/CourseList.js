import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import { Header } from '../../common';
import CourseDetail from './CourseDetail';
import Prep1 from './PreWeek1/Main';
import Prep2 from './PreWeek2/Main';
import Prep3 from './PreWeek3/Main';
import Prep4 from './PreWeek4/Main';

class CourseList extends Component {
  state = { courses: [{
    topic: 'Prep Week 1', 
    introduction: 'Function, booleans, comparisons, logical operators, repetition, variables, while loop, array, for', 
    image: require('../../../assets/loop.png'),
    body: {
      intro: '' 
    }
  }, {
    topic: 'Prep Week 2',
    introduction: 'Objects, Data Modeling, Higher Order Function, each function, map function, filter function',
    image: require('../../../assets/html.png'),
    body: {
      intro: ''
    }
  }, {
    topic: 'Prep Week 3',
    introduction: 'Reduce, Abstraction, Closure, Data Modeling, OOP, HTML, CSS, jQuery',
    image: require('../../../assets/git.png'),
    body: {
      intro: ''
    }
  }, {
    topic: 'Prep Week 4',
    introduction: 'Web Development, Git, Twitler, Testing, Revision, Project',
    image: require('../../../assets/javascript.png'),
    body: {
      intro: ''
    }
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
      <CourseDetail key = {element.topic} info = {element} />
    ))
  }


  render() {
    return (
      <ScrollView>
        <Header/>
        {this.mapOutCourses()} 
      </ScrollView>
    );
  }
}

export default CourseList;

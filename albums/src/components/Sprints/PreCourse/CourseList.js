import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import CourseDetail from './CourseDetail';
import Prep1 from './PreWeek1/Main';
import Prep2 from './PreWeek2/Main';
import Prep3 from './PreWeek3/Main';
import Prep4 from './PreWeek4/Main';

class CourseList extends Component {
  state = { courses: [{
    topic: 'Prep Week 1', 
    introduction: 'Function, booleans, comparisons, logical operators, repetition, variables, while loop, array, for', 
    image: require('../../../assets/backbone.png'),
    body: {
      intro: 'models: The persistent application data\nviews: The rendered data visible \
      to the user\ncollections: Groupings of models using underscore functionsn\n' 
    }
  }, {
    topic: 'Prep Week 2',
    introduction: 'Objects, Data Modeling, Higher Order Function, each function, map function, filter function',
    image: require('../../../assets/react.png'),
    body: {
      intro: 'React offers virtual DOMS that saves run time from unnecessary refreshing of the entire page on change.'
    }
  }, {
    topic: 'Prep Week 3',
    introduction: 'Reduce, Abstraction, Closure, Data Modeling, OOP, HTML, CSS, jQuery',
    image: require('../../../assets/angular.jpg'),
    body: {
      intro: 'Angular framework offers its service in both Typescript and Javascript.'
    }
  }, {
    topic: 'Prep Week 4',
    introduction: 'Web Development, Git, Twitler, Testing, Revision, Project',
    image: require('../../../assets/angular.jpg'),
    body: {
      intro: 'Angular framework offers its service in both Typescript and Javascript.'
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
        {this.mapOutCourses()} 
      </ScrollView>
    );
  }
}

export default CourseList;

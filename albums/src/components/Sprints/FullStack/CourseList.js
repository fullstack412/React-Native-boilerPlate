import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import CourseDetail from './CourseDetail';


class CourseList extends Component {
  state = { courses: [{
    topic: 'Backbone js', 
    introduction: 'Backbone is the first of many MVC (model-view-controller) frameworks you will be introduced to.', 
    image: require('../../../assets/backbone.png'),
    button: 'Backbone',
    body: {
      intro: 'models: The persistent application data\nviews: The rendered data visible \
      to the user\ncollections: Groupings of models using underscore functionsn\n' 
    }
  }, {
    topic: 'React js',
    introduction: 'React is a useful in making React Native apps',
    image: require('../../../assets/react.png'),
    button: 'Recastly',
    body: {
      intro: 'React offers virtual DOMS that saves run time from unnecessary refreshing of the entire page on change.'
    }
  }, {
    topic: 'Angular',
    introduction: 'Angular is a front-end framework that offers clear structure among components',
    image: require('../../../assets/angular.jpg'),
    button: 'Angular',
    body: {
      intro: 'Angular framework offers its service in both Typescript and Javascript.'
    }
  }]};

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
        {this.mapOutCourses()} 
      </ScrollView>
    );
  }
}

export default CourseList;

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import CourseDetail from './CourseDetail';
import { Header } from '../../common';

class CourseList extends Component {
  state = { courses: [{
    topic: 'Data structure', 
    introduction: 'You will learn about stack, queue, linked list, tree, etc.', 
    image: require('../../../assets/tree.jpg'),
    body: {
      intro: '' 
    }
  }, {
    topic: 'Algorithm',
    introduction: 'Buld a queen possibly counting algorithm on a chess board',
    image: require('../../../assets/tree.jpg'),
    body: {
      intro: ''
    }
  }, {
    topic: 'Underscore',
    introduction: 'Review high order functions',
    image: require('../../../assets/javascript.png'),
    body: {
      intro: ''
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
        <Header />
        {this.mapOutCourses()} 
      </ScrollView>
    );
  }
}

export default CourseList;

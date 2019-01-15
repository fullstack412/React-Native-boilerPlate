import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
import CourseDetail from './CourseDetail';



class CourseList extends Component {
  state = { courses: [{
    topic: 'AWS', 
    introduction: 'Amazon Web Service helps developers deploy their applications.', 
    image: require('../../../assets/javascript.png'),
    body: {
      intro: '' 
    }
  }, {
    topic: 'Interview',
    introduction: 'Technical Interview Requires tremendous amount of practice.',
    image: require('../../../assets/javascript.png'),
    body: {
      intro: ''
    }
  }, {
    topic: 'Grunt',
    introduction: 'Grunt helps streamline the deployment process',
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
        {this.mapOutCourses()} 
      </ScrollView>
    );
  }
}

export default CourseList;

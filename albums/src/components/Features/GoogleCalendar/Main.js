//TODO: App red screen if you click on any of dates rendered on the top of the screen

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2019-01-03': [
          '8:30am Kick Off',
          '8:50am Toy Problem', 
          '9:55am Meditation', 
          '12:00pm Lunch', 
          '1:15pm Hacking', 
          '6:00pm Dinner', 
          '6:30pm Social Night'
        ],
        '2019-01-05': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:30am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Hacking', 
          '4:00pm Unplugging', 
          '6:00pm Dinner'
        ],
        '2019-01-06': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:30am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Hacking', 
          '4:00pm Unplugging', 
          '6:00pm Dinner'
        ],
        '2019-01-07': [
          '8:30am Kick Off',
          '8:50am Toy Problem', 
          '9:55am Meditation', 
          '12:00pm Lunch', 
          '1:15pm Hacking', 
          '6:00pm Dinner', 
          '6:30pm Social Night'
        ],
        '2019-01-08': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:30am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Hacking', 
          '4:00pm Unplugging', 
          '6:00pm Dinner'
        ],
        '2019-01-09': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:30am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Hacking', 
          '4:00pm Unplugging', 
          '6:00pm Dinner'
        ],
        '2019-01-10': [
          '8:30am Kick Off',
          '8:50am Toy Problem', 
          '9:55am Meditation', 
          '12:00pm Lunch', 
          '1:15pm Hacking', 
          '6:00pm Dinner', 
          '6:30pm Social Night'
        ],
        '2019-01-12': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:30am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Java Lecture',
          '2:00pm Hacking', 
          '4:00pm Mock Presentation', 
          '6:00pm Dinner',
          '7:30pm Break',
          '8:00pm Reading Comprehension',
          '8:10pm Bloggng',
          '8:25pm Meditation'
        ],
        '2019-01-13': [
          '8:30am Kick Off', 
          '8:50am Toy Problem', 
          '10:00am Resume workshop + portfolio',
          '10:45am Talking Circle',
          '11:25am Talking Circle', 
          '12:00pm Lunch', 
          '1:00pm Java Lecture',
          '1:55pm Talking Circle',
          '2:00pm Hacking', 
          '2:45pm Reading Comprehension',
          '4:00pm Unplugging /yoga f - walking m', 
          '5:00pm Hacking',
          '6:00pm Dinner',
          '7:30pm Break',
          '8:15pm Reading Comprehension',
          '8:25pm Meditation'
        ],
        '2019-01-14': [
          '8:30am Kick Off',
          '8:35am Toy Problem Solution Lecture', 
          '8:50am Toy Problem',
          '9:50am Break',
          '9:55am Meditation',
          '10:00am Career Fair questions + Body Lanaguge + Searching Companies', 
          '11:00am Hacking', 
          '12:00pm Lunch', 
          '1:00pm Hacking',
          '2:45pm Reading Comprehension', 
          '3:00pm Career Fair | ZINC'
        ],
        '2019-01-15': [
          '8:30am Kick Off', 
          '8:35am Toy Problem Solution Lecture', 
          '8:50am Toy Problem', 
          '9:50am Break',
          '9:55am Meditation',
          '10:00am LinkedIn Crush Course', 
          '10:45am Talking Circle',
          '11:25am Talking Circle',
          '12:00pm Lunch', 
          '1:00pm Java Lecture',
          '1:15am Talking Circle',
          '1:55am Talking Circle',
          '2:00pm Hacking', 
          '2:30pm Break',
          '2:40pm Talking Circle',
          '2:45pm Reading Comprehension',
          '4:00pm Unpluging / yoga m - walking f',
          '5:00pm Hacking', 
          '6:00pm Dinner',
          '6:30pm Hacking',
          '7:30pm Break',
          '8:15pm Reading Comprehension',
          '8:25pm Meditation'
        ],
        '2019-01-16': [
          '8:30am Kick Off', 
          '8:35am Toy Problem Solution Lecture', 
          '8:50am Toy Problem', 
          '9:50am Break',
          '9:55am Meditation',
          '10:00am How to do get a remote Job', 
          '10:45am Talking Circle',
          '11:25am Talking Circle',
          '12:00pm Lunch', 
          '1:00pm Java Lecture',
          '2:00pm Hacking', 
          '2:30pm Break',
          '2:45pm Reading Comprehension',
          '4:00pm Unplugging / championship',
          '5:00pm Hacking', 
          '6:00pm Dinner',
          '6:30pm Hacking',
          '7:30pm Break',
          '8:00pm Reading Comprehension',
          '8:10pm Bloggng',
          '8:25pm Meditation'
        ],
        '2019-01-17': [
          '8:30am Kick Off', 
          '8:35am Toy Problem Solution Lecture', 
          '8:50am Toy Problem', 
          '9:50am Break',
          '9:55am Meditation',
          '10:00am Networking', 
          '10:30am Talking Circle',
          '12:00pm Lunch', 
          '1:00pm Java Revision | Lecture',
          '2:00pm Hacking', 
          '2:30pm Break',
          '2:45pm Reading Comprehension',
          '3:00pm Hacking',
          '6:00pm Dinner',
          '6:30pm Social Night'
        ],
        '2019-01-18': [
          'THE END'
        ],
        '2019-01-19': [
          'This is a low budget version of a movie credit scene.',
          ' ',
          'Just like a good movie, constructing a project needs a stellar team.',
          ' ',
          'I would like to use this opportunity to thank the outstanding team that made this app happen.',
          ' ',
          'Fatema oversaw and guided us throughout the entire process.',
          ' ',
          'Hugh provided us insights at the early stage of the development.',
          ' ',
          'Zein has always been generous with his wisdom. More importantly, he believed and supported us from day 0.',
          ' ',
          'This app couldn\'t get off the ground without the hardworking HIR\'s.',
          ' ',
          'Elyse wrote the sprint for Prep Course Week 1.',
          ' ',
          'Tal designed the course for Prep Course Week 2.',
          ' ',
          'Jozaa and Besslan were respondible for Prep Course Week 3.',
          ' ',
          'Last and certainly not least, I want to thank the students of Cohort 5.',
          ' ',
          'Your growth has motivated every staff member to work as hard as we can.',
          ' ',
          'You have out grown ours and maybe even your own expectation.',
          ' ',  
          'Your growth has just started. The sky, and the binary search tree, are your only limit now.'
        ]
      }
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2019-01-14'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2019-01-03': {textColor: '#666'},
        //    '2019-01-04': {textColor: '#666'},
        //    '2019-01-05': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2019-01-06': {startingDay: true, color: 'blue'},
        //    '2019-01-07': {endingDay: true, color: 'gray'},
        //    '2019-01-08': {startingDay: true, color: 'gray'},
        //    '2019-01-09': {color: 'gray'},
        //    '2019-01-10': {endingDay: true, color: 'gray'}}}
        //  monthFormat={'yyyy'}
        //  theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          this.state.items[strTime].push({
            name: 'Enjoy your day off',
            height: 40
            // height: Math.max(50, Math.floor(Math.random() * 150))
          });
        } 
        else {
          let calendarList = this.state.items[strTime];
          this.state.items[strTime] = [];
          for (let j = 0; j < calendarList.length; j++) {
            this.state.items[strTime].push({
              name: calendarList[j],
              height: 80
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      // <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
      <View style={[styles.item, {height: 50}]}><Text style = { fontSize = 144 }>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text style = { fontSize = 144 }>Enjoy you day off!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
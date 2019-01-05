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
        ]
      }
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2019-01-03'}
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
        //   const numItems = Math.floor(Math.random() * 5);
        //   for (let j = 0; j < numItems; j++) {
          this.state.items[strTime].push({
            name: 'Enjoy your day off: ' + strTime,
            height: Math.max(50, Math.floor(Math.random() * 150))
          });
          // }
        } else {
          let calendarList = this.state.items[strTime];
          this.state.items[strTime] = [];
          for (let j = 0; j < calendarList.length; j++) {
            this.state.items[strTime].push({
              name: calendarList[j],
              // name: 'todo',
              height: 40
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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
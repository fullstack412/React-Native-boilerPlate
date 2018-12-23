// import React, {Component} from 'react';
// import {NavigationActions} from 'react-navigation';
// import {ScrollView, Text, View, StyleSheet} from 'react-native';

// class SideMenu extends Component {
//   navigateToScreen = (route) => () => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     this.props.navigation.dispatch(navigateAction);
//   }

//   render () {
//     return (
//       <View style={Styles.container}>
//         <ScrollView>
//           <View>
//             <Text style={Styles.sectionHeadingStyle}>
//               Section 1
//             </Text>
//             <View style={Styles.navSectionStyle}>
//               <Text style={Styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
//               Page1
//               </Text>
//             </View>
//           </View>
//           <View>
//             <Text style={Styles.sectionHeadingStyle}>
//               Section 2
//             </Text>
//             <View style={Styles.navSectionStyle}>
//               <Text style={Styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
//                 Page2
//               </Text>
//               <Text style={Styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
//                 Page3
//               </Text>
//             </View>
//           </View>
//         </ScrollView>
//         <View style={Styles.footerContainer}>
//           <Text>This is my fixed footer</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const Styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,
//     flex: 1
//   },
//   navItemStyle: {
//     padding: 10
//   },
//   navSectionStyle: {
//     backgroundColor: 'lightgrey'
//   },
//   sectionHeadingStyle: {
//     paddingVertical: 10,
//     paddingHorizontal: 5
//   },
//   footerContainer: {
//     padding: 20,
//     backgroundColor: 'lightgrey'
//   }
// })

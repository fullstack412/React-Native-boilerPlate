import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Left, Right, Icon} from 'native-base';

// const Header = (props) => {
//   const { textStyle, viewStyle} = styles;
//   return (
//     <TouchableOpacity>
//       <Left>
//         <Icon name = 'menu' onPress={() => this.props.navigation.openDrawer()} />
//       </Left>
//     </TouchableOpacity>

//     // <TouchableOpacity style = {viewStyle}>
//     //   <Text style = {textStyle} onPress = {() => {Linking.openURL('http://rbk.org')}}>Hack Review from RBK</Text>
//     // </TouchableOpacity>
//   );
// };

const Header = ({ onPress }) => {
  const { textStyle, viewStyle} = styles;
  return (
    // <TouchableOpacity>
    //   <Left>
    //     <Icon name = 'menu' onPress={ onPress } style = {{justifyContent: 'flex-start'}}/>
    //   </Left>
    // </TouchableOpacity>

    <TouchableOpacity style = {viewStyle}>
      <Text style = {textStyle} onPress = {() => {Linking.openURL('http://rbk.org')}}>RBK</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight:'bold'
  },
  viewStyle: {
    backgroundColor: '#f4428f',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 24,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  }
});

export { Header };
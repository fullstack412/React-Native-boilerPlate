import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
  const { spinnerStyle } = Styles;

  return (
    <View style = { spinnerStyle }>
      <ActivityIndicator size = { size || 'large' }/>
    </View>
  )
}

const Styles = StyleSheet.create({
  spinnerStyle: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };



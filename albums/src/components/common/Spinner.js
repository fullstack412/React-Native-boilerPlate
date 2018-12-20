import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  const { spinnerStyle } = Styles;

  return (
    <View style = { spinnerStyle }>
      <ActivityIndicator size = { size || 'large' }/>
    </View>
  )
}

const Styles = {
  spinnerStyle: {
    flex : 1,
    justifyConetent: 'center',
    alignItems: 'center'
  }
}

export { Spinner };



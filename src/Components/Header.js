import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View {...props} style={ styles.container }>
      <Text style={ styles.title }>Intervals</Text>
    </View>
  )
}

const styles = {
  container: {
    height: 72,
    justifyContent: 'center',
    paddingTop: 16
  },
  title: {
    alignSelf: 'center',
    color: '#fff'
  }
}

export default Header;

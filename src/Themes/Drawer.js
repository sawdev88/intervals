import React from 'react';
import { Text, View, Dimensions, Picker } from 'react-native';
import { Hr } from '../Components';

const Drawer = (props) => {
  return (
    <View style={ [styles.container, {backgroundColor: props.bg}] }>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 6 }}>Options</Text>
      <Hr />
      {props.children}
    </View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: (Dimensions.get('window').width - 120),
    zIndex: 11,
    padding: 32,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32
  }
}

export default Drawer;

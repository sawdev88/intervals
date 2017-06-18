import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Hr } from '../Components';

const Drawer = (props) => {
  return (
    <ScrollView
        {...props}
        style={ [styles.container,
           props.width ? {width: 300, padding: 32} : {width: 0, padding: 0},
           {backgroundColor: props.bg}] }>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 6 }}>Options</Text>
      <Hr />
      {props.children}
    </ScrollView>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 11,
    padding: 0,
    overflow: 'hidden'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32
  }
}

export default Drawer;

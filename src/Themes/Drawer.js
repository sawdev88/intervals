import React from 'react';
import { Text, ScrollView, LayoutAnimation, View, TouchableOpacity, Dimensions } from 'react-native';
import { Hr } from '../Components';

const Drawer = (props) => {
  LayoutAnimation.easeInEaseOut();

  return (
    <View
      style={ [styles.container, props.width ? {height: Dimensions.get('window').height} : {height: 0}] }>
      <ScrollView style={ [styles.menuContainer, {backgroundColor: props.bg}] }>
        <Text style={{ color: '#fff', fontSize: 24, marginBottom: 6 }}>Options</Text>
        <Hr />
        {props.children}
      </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 11,
    marginTop: 64,
    width: Dimensions.get('window').width
  },
  menuContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 64
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32
  }
}

export default Drawer;

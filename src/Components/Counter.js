import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Counter = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={ props.minus }>
        <Icon style={ styles.icon } name="md-remove" size={32} color="#fff" />
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 40 }}>{ props.text }</Text>
      <TouchableOpacity onPress={ props.plus }>
        <Icon style={ styles.icon } name="md-add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  icon : {
    padding: 8,
  }
}

export default Counter;

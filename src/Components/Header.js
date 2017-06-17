import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  return (
    <View {...props} style={ styles.container }>
      <View style={ styles.titleContainer }>
        <Icon name="md-stopwatch" size={32} color="#fff" />
        <Text style={{ color: '#fff', marginLeft: 8 }}>Intervals</Text>
      </View>

      <TouchableOpacity
        style={ styles.appIcon }
        onPress={ props.onPress } >
        <Icon name="md-apps" size={32} color="rgba(255,255,255,.75)" />
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  container: {
    height: 72,
    justifyContent: 'center',
    paddingTop: 16
  },
  titleContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  appIcon: {
    position: 'absolute',
    right: 16,
    bottom: 10
  }
}

export default Header;

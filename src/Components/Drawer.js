import React, { Component } from 'react';
import { Text, ScrollView, LayoutAnimation, View, TouchableOpacity, Dimensions, Picker } from 'react-native';
import { Hr, Input } from '../Components';

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeColor: this.props.themeColor,
      testing: 2
    }
  }

  showDrawer() {
    return {
      height: Dimensions.get('window').height,
      paddingVertical: 16,
      backgroundColor: this.state.themeColor
    }
  }

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <ScrollView
        style={ [styles.menuContainer, this.props.drawerShowing ? this.showDrawer() : { height: 0 }] }>
        <Text style={{ color: '#fff', fontSize: 24, marginBottom: 6 }}>Options</Text>
        <Hr />

        <Text style={ styles.text }>Prepare Time:</Text>
        <Picker
          style={{ marginBottom: 12 }}
          selectedValue={ this.state.prepareTime }
          onValueChange={ (val, idx) => this.setState({ prepareTime: val })}>
          <Picker.Item label='5s' value='5' />
          <Picker.Item label='10s' value='10' />
          <Picker.Item label='15s' value='15' />
          <Picker.Item label='20s' value='20' />
          <Picker.Item label='25s' value='25' />
          <Picker.Item label='30s' value='30' />
        </Picker>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
          <Text style={ styles.text }>Interval Time:</Text>
          <View style={ styles.row }>
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(intervalMinute) => this.setState({ intervalMinute })}
              value={ '00' } />
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(intervalSecond) => this.setState({ intervalSecond })}
              value={ '00' } />
          </View>
        </View>

      </ScrollView>
    )
  }
}

const styles = {
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuContainer: {
    position: 'absolute',
    top: 72,
    left: 0,
    zIndex: 10001,
    paddingHorizontal: 32,
    width: Dimensions.get('window').width
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32
  },
  timeInput: {
    height: 28,
    width: 28,
    textAlign: 'center',
    marginLeft: 24,
    marginRight: 12
  },
}

export default Drawer;

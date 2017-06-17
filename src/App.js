import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header } from './Components';
import { RandomColorPicker } from './Utility/Functions';

// const { RandomColorPicker } = Functions;

class App extends Component {
  render() {
    const themeColor = RandomColorPicker();
    return (
      <View>
        <StatusBar
           backgroundColor={ themeColor }
           barStyle={ 'light-content' }
         />
        <Header
          backgroundColor={ themeColor }/>
      </View>
    )
  }
}

const styles = {

}

export default App;

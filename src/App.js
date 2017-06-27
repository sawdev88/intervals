import React, { Component } from 'react';
import { View, Text, StatusBar, Picker } from 'react-native';
import { Header, Input, Hr, Button, Counter } from './Components';
import { Drawer } from './Themes'
import { RandomColorPicker } from './Utility/Functions';

var round = 0;

class App extends Component {
  constructor() {
    super();
    const themeColor = RandomColorPicker();

    this.state = {
      themeColor: RandomColorPicker(),
      prepareTime: '3',
      intervalHour: '00',
      intervalMinute: '00',
      intervalSecond: '03',
      restHour: '00',
      restMinute: '00',
      restSecond: '03',
      roundCount: 3,
      currentTitle: 'Prepare',
      currentTime: 0
    }

    this.baseState = this.state;
  }

  componentDidMount() {
    this.setState({ currentTime: this.state.prepareTime })
  }

  resetToInitialState() {
    this.state=( this.baseState )
  }

  getIntervalTime(isInterval) {
    if (isInterval) {
      let minutes = +this.state.intervalMinute * 60;
      let seconds = +this.state.intervalSecond;
      return minutes + seconds + 1;
    } else {
      let minutes = +this.state.restMinute * 60;
      let seconds = +this.state.restSecond;
      return minutes + seconds;
    }
  }

  setTimer(val) {
    let _this = this;
    let currentTime = +val;

    let timer = setInterval(function () {
      let countdown = currentTime -= 1;
      _this.setState({ currentTime: countdown })

      if (countdown === 0) {
        clearInterval(timer);
        if (round < _this.state.roundCount) { _this.intervalTimer(); }
      }
    }, 1000);

  }

  initialTimer() {
    this.setTimer(this.state.prepareTime)
  }

  intervalTimer() {
    let _this = this;
    let currentTime = this.getIntervalTime(true);

    let timer = setInterval(function () {
      countdown = currentTime -= 1
      _this.setState({ currentTime, currentTitle: 'Action' })
      if (countdown < 0) {
        clearInterval(timer);
        let restTime = _this.getIntervalTime();
        console.log(round);
        _this.setState({ currentTime: restTime, currentTitle: 'Rest' });
        _this.setTimer(_this.state.currentTime);
        round++;
      }
    }, 1000)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          bg={ this.state.themeColor }
          width={ this.state.drawerShowing } >
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
          <Text style={ styles.text }>Interval Time:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(intervalHour) => this.setState({ intervalHour })}
              value={ this.state.intervalHour } />
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(intervalMinute) => this.setState({ intervalMinute })}
              value={ this.state.intervalMinute } />
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(intervalSecond) => this.setState({ intervalSecond })}
              value={ this.state.intervalSecond } />
          </View>
          <Text style={ styles.text }>Rest Time:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(restHour) => this.setState({ restHour })}
              value={ this.state.restHour } />
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(restMinute) => this.setState({ restMinute })}
              value={ this.state.restMinute } />
            <Input
              underline
              number
              style={ styles.timeInput }
              onChangeText={(restSecond) => this.setState({ restSecond })}
              value={ this.state.restSecond } />
          </View>
          <Text style={ styles.text }>Rounds:</Text>
          <Counter
            text={ this.state.roundCount }
            minus={ () => this.setState({ roundCount: (this.state.roundCount - 1) }) }
            plus={ () => this.setState({ roundCount: (this.state.roundCount + 1) }) }
          />
          <Button onPress={ () => this.setState({ drawerShowing: false, currentTime: this.state.prepareTime }) } margin title={ 'Close' } color={ 'white' }/>
          <Button
            onPress={ () => this.resetToInitialState() }
            margin
            title={ 'Reset' }
            color={ '#fff' } />
            <View style={{ height: 64 }} />
        </Drawer>
        <StatusBar
           backgroundColor={ this.state.themeColor }
           barStyle={ 'light-content' }
         />
        <Header
          backgroundColor={ this.state.themeColor }
          onPress={ () => this.setState({ drawerShowing: true })}/>

        <View style={{ padding: 32 }}>
          <Text>{ this.state.currentTitle }</Text>
          <Text style={{ fontSize: 60 }}>{ this.state.currentTime }</Text>

          <Button
            title={ 'Start' }
            color={ this.state.themeColor }
            onPress={ () => this.initialTimer() }/>
        </View>
      </View>
    )
  }
}

const styles = {
  text: {
    color: '#fff',
    fontSize: 18,
  },
  timeInput: {
    height: 40,
    width: 40,
    textAlign: 'center'
  }
}

export default App;

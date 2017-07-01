import React, { Component } from 'react';
import { View, Text, StatusBar, Picker } from 'react-native';
import { Header, Input, Hr, Button, Counter } from './Components';
import { Drawer } from './Themes'
import { randomColorPicker, slideIn } from './Utility/Helpers';

class App extends Component {
  constructor() {
    super();
    const themeColor = randomColorPicker();

    this.state = {
      themeColor: randomColorPicker(),
      prepareTime: '3',
      intervalHour: '00',
      intervalMinute: '00',
      intervalSecond: '03',
      restHour: '00',
      restMinute: '00',
      restSecond: '03',
      roundCount: 3,
      currentRound: 0,
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
        if (_this.state.currentRound < _this.state.roundCount) { _this.intervalTimer(); }
        _this.setState({ currentRound: (_this.state.currentRound + 1) })
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
        _this.setState({ currentTime: restTime, currentTitle: 'Rest' });
        _this.setTimer(_this.state.currentTime);
      }
    }, 1000)
  }

  displayRounds() {
    if(this.state.currentRound === 0) {
      return '--';
    } else {
      let count = '';
      if( this.state.currentRound >= this.state.roundCount ) {
         count = this.state.roundCount + '/' + this.state.roundCount;
      } else {
        count = this.state.currentRound + '/' + this.state.roundCount
      }
      return count;
    }
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
            <Text style={ styles.text }>Interval Time:</Text>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={ styles.text }>Rest Time:</Text>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={ styles.text }>Rounds:</Text>
            <Counter
              text={ this.state.roundCount }
              minus={ () => this.setState({ roundCount: (this.state.roundCount - 1) }) }
              plus={ () => this.setState({ roundCount: (this.state.roundCount + 1) }) }
            />
          </View>
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
          onPress={ () => this.setState({ drawerShowing: !this.state.drawerShowing, currentTime: this.state.prepareTime })}/>

        <View style={{ padding: 32, flex: 1 }}>
          <Text>{ this.state.currentTitle }</Text>
          <Text style={ styles.largeText }>{ this.state.currentTime }</Text>

          <View style={ styles.row }>
            <Text style={ styles.mediumText }>Round</Text>
            <Text style={ [styles.mediumText, { marginLeft: 24 }] }>{this.displayRounds()}</Text>
          </View>

          <Button
            style={ styles.startButton }
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
  },
  startButton: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  largeText: {
    fontSize: 64
  },
  mediumText: {
    fontSize: 48
  }
}

export default App;

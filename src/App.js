import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header, Input, Hr, Button, Counter, Drawer } from './Components';
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
      currentTime: 0,
      drawerShowing: false,
      testing: 1
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

  handleDrawerOptions(item) {
    this.setState({ testing: item })
  }

  render() {
    console.log(this.state.drawerShowing);
    return (
      <View style={{ flex: 1 }}>
        <Drawer { ...this.state } />
        <StatusBar
           backgroundColor={ this.state.themeColor }
           barStyle={ 'light-content' }
         />
        <Header
          backgroundColor={ this.state.themeColor }
          onPress={ () => this.setState({
            drawerShowing: !this.state.drawerShowing,
            currentTime: this.state.prepareTime
          })}/>

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

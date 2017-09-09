import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Button, Notification} from 'react-native-ui-lib';
import ContactList from './contact-list/contact-list.component';
import Orientation from './orientation/orientation.component';
import SendInput from './send-input/send-input';
import AnalogClock from './analog-clock/AnalogClock';

export default class App extends Component {

  constructor() {
    super();
    this.toggleNotification = this.toggleNotification.bind(this);
    this.state = {
      showNotification: false
    };
  }

  toggleNotification() {
    const {showNotification} = this.state;
    this.setState({showNotification: !showNotification})
  }

  render() {
    return (
      <View style={styles.clockContainer}>
        <AnalogClock autoUpdate={true} style={{width:200, height:200}} bla={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  clockContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? 'black' : '#5994f2',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

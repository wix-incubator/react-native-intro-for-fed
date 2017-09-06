import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Notification} from 'wix-react-native-ui-lib';
import ContactList from './contact-list/contact-list.component';
import Orientation from './orientation/orientation.component';

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
      <Orientation/>
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
});

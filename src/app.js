import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Notification} from 'wix-react-native-ui-lib';

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
      <View style={styles.container}>
        <Button
          label="Hit Me"
          onPress={this.toggleNotification}
        />
        {this.state.showNotification && <Text>Whoopi doo</Text>}
        {false && <Notification
          visible={this.state.showNotification}
          message="Whoopi doo"
        />}
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
});

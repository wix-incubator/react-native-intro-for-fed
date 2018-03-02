import React, { Component } from 'react';
import {Button, Text, View} from 'react-native-ui-lib';

export default class Demo1 extends Component {

  constructor(props) {
    super(props);
    this.toggleNotification = this.toggleNotification.bind(this);
    this.state = {
      showNotification: false
    };
  }

  toggleNotification() {
    this.setState({showNotification: !this.state.showNotification})
  }

  render() {
    return (
      <View flex center>
        <Button bg-dark20 text40 label="Hit Me" onPress={this.toggleNotification}/>

        {this.state.showNotification && <Text text30 style={{fontWeight: 'bold'}}>Whoopi doo</Text>}

      </View>
    );
  }
}

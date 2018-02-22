import React, { Component } from 'react';
import {Button, Notification, Text, View} from 'react-native-ui-lib';
import Demo1 from './demo/demo-1';
import Demo2 from './demo/demo-2';
import Demo3 from './demo/demo-3';
import Demo4 from './demo/demo-4';
import Demo5 from './demo/demo-5';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Comp: undefined
    };
  }

  onButtonPressed = (Comp) => {
    this.setState({Comp})
  };

  render() {
    if (this.state.Comp) {
      return <this.state.Comp/>;
    }
    return (
      <View flex center bg-dark20>
        <Button bg-blue10 margin-5 text30 label={'DEMO 🚶'} onPress={() => this.onButtonPressed(Demo1)}/>
        <Button bg-blue20 margin-5 text30 label={'DEMO 🏃'} onPress={() => this.onButtonPressed(Demo2)}/>
        <Button bg-blue30 margin-5 text30 label={'DEMO 🕺'} onPress={() => this.onButtonPressed(Demo3)}/>
        <Button bg-blue40 margin-5 text30 label={'DEMO 💃'} onPress={() => this.onButtonPressed(Demo4)}/>
        <Button bg-blue50 margin-5 text30 label={'DEMO 💔'} onPress={() => this.onButtonPressed(Demo5)}/>
      </View>

    );
  }
}

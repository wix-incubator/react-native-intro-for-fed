import React, {PureComponent} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import SendButton from './send-button';

export default class SendInput extends PureComponent{
  constructor() {
    super();
    this.state = {text: 'bla'};
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({text});
  }

  render() {
    return (
      <View style={s.inputWrapper}>
        <TextInput style={s.input} onChangeText={this.onChangeText} value={this.state.text}/>
        <SendButton/>
      </View>
    );
  }
}

const s = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 45,
    alignItems: 'center'
  },
  input: {
    flex: 1
  }
});
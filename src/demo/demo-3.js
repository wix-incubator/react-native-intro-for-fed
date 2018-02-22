import React, { Component } from 'react';
import {Button, Text, View} from 'react-native-ui-lib';
import SendButton from './../send-input/send-button';

export default class Demo3 extends Component {

  render() {
    /* ------- DEMO 3 -  Different Javascript Implementation For Different Platforms---------- */
    return (
      <View flex centerV>
        <View spread paddingH-8 centerV row >
          <View marginH-8 flex bg-dark50 br40 >
            <Text text30 style={{fontWeight: 'bold', paddingLeft: 10}}>input</Text>
          </View>

          <SendButton/>

        </View>
      </View>
    );
  }
}

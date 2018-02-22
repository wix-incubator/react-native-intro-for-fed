import React, { Component } from 'react';
import {Platform, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import AnalogClock from './../analog-clock/AnalogClock';

export default class Demo4 extends Component {

  render() {
    /* ------- DEMO 4 -  Using Native UI Components---------- */
    return (
      <View flex center style={styles.clockContainer}>
        <AnalogClock autoUpdate={true} style={{width:200, height:200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clockContainer: {
    backgroundColor: Platform.OS === 'ios' ? 'black' : '#5994f2',
  }
});

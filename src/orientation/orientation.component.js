import {NativeModules} from 'react-native';
const Orientation = NativeModules.Orientation;
import {View, Text} from 'react-native';
import React, {PureComponent} from 'react';

export default class OrientationComponent extends PureComponent {

  constructor() {
    super();
    this.state = {orientation: ''};
    this.displayOrientation();
  }

  async displayOrientation() {
    const orientation = await Orientation.getCurrent();
    this.setState({orientation});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 28}}>{`📱 ${this.state.orientation} 📱`}</Text>
      </View>
    );
  }
}
import {NativeModules} from 'react-native';
const Orientation = NativeModules.Orientation;
import {Text} from 'react-native';
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
      <Text style={{fontSize: 20}}>{this.state.orientation}</Text>
    );
  }
}
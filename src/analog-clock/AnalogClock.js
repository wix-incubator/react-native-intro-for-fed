import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'AnalogClock',
  propTypes: {
    autoUpdate: PropTypes.bool,
    ...View.propTypes, // include the default view properties
  },
};

module.exports = requireNativeComponent('AnalogClock', iface);
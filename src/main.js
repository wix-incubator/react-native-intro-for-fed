import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
import { Navigation } from 'react-native-navigation';
import App from './app';

//clear bridge
//comment registerEvents here - /Users/ofird/code/fed-rn-intro/node_modules/react-native/Libraries/WebSocket/WebSocket.js
// MessageQueue.spy(true);

Navigation.registerComponent('com.wix.MainScreen', () => App);
Navigation.registerComponent('com.wix.ContactPosts', () => require('./contact-posts/contact-posts.component').default);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'com.wix.MainScreen',
    title: 'FED Intro to ReactNative',
  }
});

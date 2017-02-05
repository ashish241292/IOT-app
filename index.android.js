import './app/values';
import "./app/styles";
import "./app/modules/core";
import renderScene from './app/navigator';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  Navigator,
  BackAndroid,
  ToastAndroid
} from 'react-native';

BackAndroid.addEventListener('hardwareBackPress', () => {
//check for the main screen when physical back button is preser
 if (!onMainScreen()) {
   goBack();
   return true;
 }
 return false;
});

//A Global function to show messages to user.
Toast = ( message, duration = ToastAndroid.SHORT) => {
    ToastAndroid.show(message, duration)
}

export default class IOT extends Component {
  render() {
      global.Icon = Icon;
    return (
        <Navigator initialRoute={ initialRoute } renderScene={ renderScene }/>
    );
  }
}

AppRegistry.registerComponent('IOT', () => IOT);

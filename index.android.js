import React, { Component } from 'react';
import './app/values/json';
import renderScene from './app/navigator';
import {
  AppRegistry,
  Navigator,
  View,
} from 'react-native';

export default class IOT extends Component {
  render() {
    return (
      <View>
          <Navigator initialRoute={ initialRoute } renderScene={ renderScene }/>
      </View>
    );
  }
}

AppRegistry.registerComponent('IOT', () => IOT);

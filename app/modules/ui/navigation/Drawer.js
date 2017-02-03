import React, {Component} from 'react';
import {
    View,
    Text,
    DrawerLayoutAndroid
} from 'react-native';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }
    _navigationView() {
        return
            <View>
                <Text> Place your navigatin link here.</Text>
            </View>
    }
    render(){
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                renderNavigationView = { this._navigationView.bind(this) }
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ><Text>Hello!!</Text>
                { this.props.children }
            </DrawerLayoutAndroid>
        )
    }
}

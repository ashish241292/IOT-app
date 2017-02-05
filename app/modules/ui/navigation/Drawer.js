import React, {Component} from 'react';
import Toolbar from './Toolbar'
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
        return (
            <View>
                <Text> Place your navigatin link here.</Text>
            </View>
        )
    }
    render(){
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                renderNavigationView = { this._navigationView }
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                >
                    <View style={{flex:1}}>
                        <View style={{flex:1.12, borderWidth:0, minHeight:40}} elevation={7}>
                            <Toolbar />
                        </View>
                        <View style={{flex:10}}>
                            { this.props.children }
                        </View>
                    </View>
            </DrawerLayoutAndroid>
        )
    }
}

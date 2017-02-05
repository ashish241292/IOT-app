import React, {Component} from 'react';
import Toolbar from './Toolbar'
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid
} from 'react-native';
import {List} from './../List';
export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }
    _navigationView() {
        return (
            <View style={{flex:1}}>
                <View style={DrawerStyle.header}>
                    <Image source={require('./../../../res/drawable/header.jpg')} style={DrawerStyle.headerImage}>
                        <View style={{flex:1.2}}>
                            <View style={DrawerStyle.otherProfileImageContainer}>
                                {/* more logedin account*/}
                                <Image
                                    source={require('./../../../res/drawable/profile3.jpg')}
                                    style={DrawerStyle.otherProfileImage}
                                />
                            </View>
                            <View style={{flex:2}}>
                                <Image
                                    source={require('./../../../res/drawable/profile3.jpg')}
                                    style={DrawerStyle.profileImage}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, left:16}}>
                            <Text style={DrawerStyle.name}>
                                Ashish Kumar
                            </Text>
                            <Text style={DrawerStyle.email}>
                                ashish.kumar241292@gmail.com
                            </Text>
                        </View>
                    </Image>
                </View>
                <View style={DrawerStyle.body}>
                    <View>
                        <List data={DrawerNavigationList} />
                    </View>
                </View>
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

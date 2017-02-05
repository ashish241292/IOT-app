import React, {Component} from 'react';
import {
    View,
    Text,
    ToolbarAndroid,
} from 'react-native';

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ToolbarAndroid
                title="AwesomeApp"
                style={{flex:1, backgroundColor:STRING.toolBar}}
                titleColor="#ffffff"
             />
        )
    }
}

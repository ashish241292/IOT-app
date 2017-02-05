import React, { Component } from "react";
import {
    View,
    Text,
    TouchableNativeFeedback
 } from "react-native";

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    onPress(nativeEvent) {
        this.props.onPress && this.props.onPress(nativeEvent);
    }
    onLongPress(nativeEvent) {
        this.props.onLongPress && this.props.onLongPress(nativeEvent);
    }
    onLayout(nativeEvent) {
        this.props.onLayout && this.props.onLayout(nativeEvent);
    }
    render(){
        let {
            title,
            icon,
            iconStyle,
            containerStyle,
            disabled = false,
            type,
            background,
        } = this.props;
        if (disabled) type = "disabled";
        if (!background) background = TouchableNativeFeedback.SelectableBackground();
        return (
            <TouchableNativeFeedback
                disabled={disabled}
                background={background}
                onPress={this.onPress.bind(this)}
                onLayout={this.onLayout.bind(this)}
                onLongPress={this.onLongPress.bind(this)}
                >
                <View elevation={disabled?0.5:4} style={[ {backgroundColor: type ? STRING.backgroundColor[type] : STRING.backgroundColor.default}, ButtonStyle.container, containerStyle ]}>
                    <View style={ButtonStyle.textContainer}>
                        {icon?<Text style={[ iconStyle, {fontFamily:'Roboto, sans-serif'} ]}>
                            {icon}
                        </Text>:null}
                        <View>
                            <Text style={[ButtonStyle.text, {color: type ? STRING.color[type] : STRING.color.default}]}>
                                {title.toUpperCase()}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

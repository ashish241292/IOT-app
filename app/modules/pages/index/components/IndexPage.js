import React, {Component} from "react";
import {
    View,
    Text,
} from "react-native";
import {Button} from "./../../../ui/input";

export default class IndexPage extends Component {
    constructor( props ){
        super( props );
        this.state={
            status: props.status || "off",
        }
    }
    setStatus( data ){
        let status = data.status;
        this.setState({status}, () => Toast(`e-Bulb has been set to ${status.toUpperCase()}`));
    }
    render(){
        const {status} = this.state;
        return (
            <View style={{flex:1}}>
                <View style={{
                    flex:3,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <View style={{}}>
                        <Icon
                            size={200}
                            name={STRING.bulb.icon[status]}
                            color={STRING.bulb[status]}
                        />
                    </View>
                </View>
                <View style={{flex:2}}>
                    <View style={{
                        flexDirection: "row",
                        alignSelf:"center",
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                        <Button
                            title="on"
                            type="primary"
                            onPress={( nevt ) => {
                                let component = this;
                                if (status !== "on"){
                                    AJAX.crateInstance("/bulb/on" );
                                    AJAX.call(
                                        ( data ) => {
                                            this.setStatus( data );
                                            console.log(data);
                                        },
                                        (err) => {
                                                console.log({err});
                                        }
                                    )
                                } else {
                                    Toast("All ready set to ON")
                                }
                            }}
                        />
                        <Button
                            title="off"
                            type="secondary"
                            onPress={( nevt ) => {
                                let component = this;
                                if (status !== "off") {
                                    AJAX.crateInstance("/bulb/off" );
                                    AJAX.call(
                                        ( data, res ) => {
                                            console.log(data);
                                            this.setStatus( data );
                                        },
                                        (message, err) => {
                                            console.log(message);
                                        }
                                    );
                                } else {
                                    Toast("All ready set to OFF")
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

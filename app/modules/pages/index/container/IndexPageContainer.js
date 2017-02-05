import React, {Component} from "react";
import IndexPage from './../components/IndexPage';
import { View } from 'react-native';

export default class IndexPageContainer extends Component {
    constructor( props ){
        super( props );
    }
    render(){
        return (
            <View style={{ flex:1,backgroundColor: STRING.appBackgroundColor}}>
                <IndexPage {...this.props} />
            </View>
        );
    }
}

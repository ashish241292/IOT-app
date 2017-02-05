import React, {Component} from "react";
import {
        View,
        Text,
        ListView,
        TouchableNativeFeedback,
    } from "react-native";

export default class List extends Component {
    constructor(props) {
        super(props);
        let {data} = props;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(data),
            ds:ds
        }
    }
    onPress( nativeEvent, rowData, sectionID, rowID, highlightRow) {
        if( this.props.onPress ){
            this.props.onPress(nativeEvent, rowData, sectionID, rowID, highlightRow);
        }
    }
    _renderSectionHeader(sectionData, sectionID) {
        let margin = sectionData?4:0;
        return (
            <View style={{marginTop:margin, marginBottom:margin, paddingLeft:16}}>
                <Text style={{fontFamily:STRING.fontFamily, fontSize:20, color:"#9E9E9E", fontWeight:"500"}}>
                    {sectionID}
                </Text>
            </View>
        )
    }
    _renderRow(rowData, sectionID, rowID, highlightRow){
        const {rowHeight=50} = this.props;
        return(
            <View style={{height:rowHeight}}>
                <TouchableNativeFeedback
                    background = {TouchableNativeFeedback.SelectableBackground()}
                    onPress={ nativeEvent => (this.onPress.bind(this))(nativeEvent, rowData, sectionID, rowID, highlightRow)}
                    >
                    <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                        <View style={{paddingLeft:16}}>
                            <Icon
                                size={rowData.icon.size || 30}
                                color={ rowData.icon.color || "#616161" }
                                name={ typeof rowData.icon === "string"?rowData.icon:rowData.icon.name }
                            />
                        </View>
                        <View style={{paddingLeft:26}}>
                            <Text style={{color:"#616161", fontFamily:STRING.fontFamily, fontSize:17, fontWeight:"400"}}>{rowData.title}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    render(){
        const {dataSource} = this.state;
        let {
            initialListSize = 7,
            listStyle = {},
        } = this.props;
        return(
            <ListView
                dataSource={dataSource}
                style={listStyle}
                enableEmptySections={true}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }
}

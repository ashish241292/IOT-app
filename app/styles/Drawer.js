import { StyleSheet } from 'react-native';
DrawerStyle = StyleSheet.create({
    header:{
        flex:1.5,
    },
    headerImage:{
    },
    backgroundImage:{
    },
    profileImage:{
        height:80,
        width:80,
        borderRadius: 150,
        marginLeft:16
    },
    otherProfileImageContainer:{
        flex:1.5,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center"
    },
    otherProfileImage:{
        height:40,
        width:40,
        borderRadius: 150,
        marginLeft:16
    },
    name:{
        fontFamily: STRING.fontFamily,
        fontSize:14,
        color: "#FFFFFF"
    },
    email:{
        fontFamily: STRING.fontFamily,
        fontSize:14,
        color: "#FFFFFF"
    },
    body:{
        flex:3,
        backgroundColor:STRING.appBackgroundColor
    }
});

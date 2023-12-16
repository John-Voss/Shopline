import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image, TextInput, Alert} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppTitle from '../components/AppHeader';

export default class UserScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            userEmail: '',
            userName: ''
        }
    }

    async firebaseFunction(){
        await firebase
          .database()
          .ref('/')
          .get('email', 'username')
          .then(this.setState({
            userEmail: email,
            userName: username
          }))
    }
    
    render(){
        return(
            <View style={styles.container}>
                <AppTitle/>
                    <View style={styles.firstPart}>
                        <Image source={require('../assets/login.png')} style={styles.imageUser}/>
                        <Text style={styles.username}>{this.state.userName}</Text>
                        <Text style={styles.email}>{this.state.userEmail}</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    firstPart:{
        flex: 0.5,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        top: RFValue(0),
    },
    imageUser:{
        width: 150,
        height: 150,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 150,
        top: RFValue(-30),
    },
    username:{
        fontSize: 35,
        alignSelf: 'center',
        top: RFValue(110)
    },
    email:{
        fontSize: 35,
        alignSelf: 'center',
        top: RFValue(100)
    }
})
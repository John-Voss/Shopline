import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class AppTitle extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image source={require('../assets/shopline.png')} style={styles.image}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
    },
    image:{
        width: RFValue(180),
        height: RFValue(60),
        alignSelf: 'center',
        marginTop: 10
    },
    background:{
        backgroundColor: '#0FE324',
        width: '100%',
        height: 110,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
        // marginBottom: 20
    }
})
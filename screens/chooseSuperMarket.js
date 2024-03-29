import * as React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import AppTitle from '../components/AppHeader';

export default class ChooseSupermarket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            market: ''
        }
    }
    
    enterSupermarket = async (supermarket)=>{
        this.setState({
            market: supermarket
        })

        this.props.navigation.navigate('Sede', {market: supermarket});
    }

    render() {
        return (
            <View style={styles.container}>
                <AppTitle />

                <View style={styles.textContainer}>
                    <Text style={styles.chooseMarket}>Escolha a rede de supermercado:</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=> this.enterSupermarket('Condor')}>
                        <Image source={require('../assets/condor.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.enterSupermarket('Festval')}>
                        <Image source={require('../assets/festval.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.enterSupermarket('Carrefour')}>
                        <Image source={require('../assets/carrefour.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.enterSupermarket('Walmart')}>
                        <Image source={require('../assets/walmart.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.enterSupermarket('Big')}>
                        <Image source={require('../assets/big.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    chooseMarket: {
        fontSize: RFValue(15)
    },
    image: {
        maxWidth: 288,
        maxHeight: 120,
        marginBottom: 20,
    },
    textContainer: {
        flex: 0.08,
        alignItems: 'center',
        marginTop: -70
    },
    buttonContainer: {
        flex: 0.7,
        alignItems: 'center',
        alingSelf: 'stretch',
        paddingTop: 20
    }
})
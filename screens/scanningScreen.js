import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Permissions from 'expo-permissions';
import {Camera, getCameraPermissionsAsync, requestCameraPermissionsAsync} from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner';

import AppTitle from '../components/AppHeader';
import prodCode from '../productsCode.json';

export default class Scanning extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            textCode: '',
            thirst: this.props.route.thirst,
            messageNull: 'Por favor insira o código do produto...',

            domState: 'normal',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ''
        }
    }

    sendProductCode = () =>{
        var productCode = this.state.textCode.toUpperCase().trim();
        var productPrice = prodCode[productCode].price;
        if(productCode){
            if(productCode === prodCode[productCode].code){
                console.log()
                this.setState({
                    price: this.state.price + productPrice
                })
            }
        } else{
            Alert.alert(
                'Error!',
                'Por favor insira o código do produto...!',
                [{ text: 'Ok', onPress: () => console.log('OK PRECIONADO!') }],
                { cancelable: false }
            )
        }
    }

    getCameraPermission = async () => {
        const { status } = await getCameraPermissionsAsync();

        if(status !== 'granted'){
            await requestCameraPermissionsAsync();
        }
        this.setState({
            domState: 'canGo',
            hasCameraPermissions: status === 'granted',
            scanned: false
        })
    }
    handleBarCodeScanned = async () => {
        const { domState } = this.state;
        if (domState === 'canGo') {
            this.setState({
                domState: 'normal',
                scanned: true,
                scannedData: data
            })
        }
    }

    render(){
        const { domState, scanned } = this.state;
        if (domState != 'normal') {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            )
        }
        return(
            <View style={styles.container}>
                <AppTitle/>

                <View style={styles.textContainer}>
                    <Text style={styles.priceText}>R$ {this.state.price}</Text>
                </View>

                <View style={styles.qrContainer}>
                    <TouchableOpacity style={styles.buttonQR} onPress={()=> this.getCameraPermission()}>
                        <Text style={styles.textQr}>Escanear QR Code</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.setState({ textCode: text })}
                        placeholder={"Digite o código do produto..."}
                        placeholderTextColor={"gray"}
                        autoFocus
                    />

                    <View>
                        <TouchableOpacity onPress={()=> this.sendProductCode()}>
                            <Image source={require('../assets/arrow.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.endBuyContainer}>
                    <TouchableOpacity style={styles.buttonEndBuy} onPress={()=> this.props.navigation.navigate('Finalizar compra', {price: this.state.price})}>
                        <Text style={styles.textEndBuy}>Finalizar compra</Text>
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
    textContainer: {
        flex: 0.2,
        alignItems: 'center',
    },
    priceText: {
        color: '#FF7A00',
        fontSize: RFValue(50),
        fontWeight: 'bold',
        textShadowColor: '#C2C2C2',
        textShadowOffset: {width: 0, height: 8},
        textShadowRadius: 10,
        width: '80%'
    },
    qrContainer: {
        flex: 0.6,
        alignItems: 'center'
    },
    buttonQR: {
        backgroundColor: '#FF7A00',
        borderWidth: 5,
        borderColor: '#0FE324',
        borderRadius: 20,
        width: 300,
        height: 80,
        alignItems: 'center',
        paddingTop: RFValue(10),
        marginLeft: -170
    },
    textQr: {
        color: '#000',
        fontSize: RFValue(18)
    },
    textInput: {
        width: "75%",
        height: 60,
        padding: 15,
        fontSize: 20,
        color: "#000",
        backgroundColor: '#fff',
        borderWidth: 2,
        marginTop: 20
    },
    endBuyContainer: {
        flex: 0.2,
        alignItems: 'center'
    },
    buttonEndBuy: {
        backgroundColor: '#FF7A00',
        borderWidth: 5,
        borderColor: '#0FE324',
        borderRadius: 20,
        width: 300,
        height: 100,
        alignItems: 'center',
        paddingTop: RFValue(15),
        marginTop: -200
    },
    textEndBuy: {
        color: '#000',
        fontSize: RFValue(18)
    },
    image: {
        width: RFValue(45),
        height: RFValue(30),
        marginLeft: 320,
        marginTop: -55
    }
})
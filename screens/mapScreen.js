import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MapView, {Marker} from 'react-native-maps';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import AppTitle from '../components/AppHeader';

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: null,
                long: null
            },
            setCoords: null
        }

        
    }
    
    currentLocationUser = async () => {
        const {status} = await requestForegroundPermissionsAsync()
        
        if (status){
            const currentPosition = await getCurrentPositionAsync()
            this.setState({
                setCoords: currentPosition,
                location:{
                    lat: currentPosition.coords.latitude,
                    long: currentPosition.coords.longitude
                }
            })
        }    
        else{
            Alert.alert(
                'Permissão para aceesar a localização foi negada!',
                [{ text: 'Ok', onPress: () => console.log('OK PRECIONADO!') }],
                { cancelable: false }
            )
            return;
        }

        console.log('LOCALIZAÇÃO ATUAL => ', this.state.setCoords)
        
    }

    componentDidMount(){
        this.currentLocationUser()
    }

    render() {
        return (
            <View style={styles.container}>
                <AppTitle />

                <MapView
                style={{
                    flex: 1,
                    width: '100%',
                }}
                initialRegion={{
                    latitude: this.state.location.lat,
                    longitude: this.state.location.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                >

                    <Marker 
                    coordinate={{
                        latitude: this.state.location.lat,
                        longitude: this.state.location.long
                    }}>
                    </Marker>
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    chooseThirst: {
        fontSize: RFValue(15)
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: '#FF914D',
        borderRadius: 100,
        width: '50%',
        alignItems: 'center',
        marginBottom: 70
    },
    buttonText: {
        fontSize: RFValue(15),
        fontWeight: 'bold'
    },
    location: {
        maxWidth: 288,
        maxHeight: 120,
        // marginBottom: 20,
        // alingSelf: 'center'
    },
    textContainer: {
        flex: 0.08,
        alignItems: 'center',
        marginTop: -80
    },
    buttonContainer: {
        flex: 0.7,
        alignItems: 'center',
        alingSelf: 'stretch',
    }
})
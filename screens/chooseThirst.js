import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppTitle from '../components/AppHeader';

export default class ChooseThirst extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thirst1: '',
            thirst2: '',
            thirst3: '',
            thirst4: '',
        }
    }

    enterThirst = async ()=>{
        if(this.props.route.params.market === 'Condor'){
            this.setState({
                thirst1: 'Nilo Peçanha',
                thirst2: 'Agua Verde',
                thirst3: 'Boa Vista',
                thirst4: 'Champagnat'
            })
        }else if(this.props.route.params.market === 'Festval'){
            this.setState({
                thirst1: 'Mercês',
                thirst2: 'Brigadeirinho',
                thirst3: 'Barigui',
                thirst4: 'Centro Cívico'
            })
        }else if(this.props.route.params.market === 'Carrefour'){
            this.setState({
                thirst1: 'Pinhais',
                thirst2: 'Portão',
                thirst3: 'Parolin',
                thirst4: 'Champagnat'
            })
        }else if(this.props.route.params.market === 'Walmart'){
            this.setState({
                thirst1: 'Brigadeirinho',
                thirst2: 'Santa Felicidade',
                thirst3: 'Bom Retiro',
                thirst4: 'Cajuru'
            })
        }else if(this.props.route.params.market === 'Big'){
            this.setState({
                thirst1: 'Av. Presidente Arthur',
                thirst2: 'Av. Paraná',
                thirst3: 'Portão',
                thirst4: 'R. Canadá'
            })
        }
    }

    componentDidMount(){
        this.enterThirst();
    }

    render() {
        return (
            <View style={styles.container}>
                <AppTitle />

                <View style={styles.textContainer}>
                    <Text style={styles.chooseThirst}>Escolha a sede do supermercado:</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Início', {thirst: this.state.thirst1})}>
                        <Text style={styles.buttonText}>{this.state.thirst1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Início' , {thirst: this.state.thirst2})}>
                        <Text style={styles.buttonText}>{this.state.thirst2}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Início' , {thirst: this.state.thirst3})}>
                        <Text style={styles.buttonText}>{this.state.thirst3}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Início' , {thirst: this.state.thirst4})}>
                        <Text style={styles.buttonText}>{this.state.thirst4}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Mapa')}>
                        <Image source={require('../assets/location.png')} style={styles.location} />
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
    chooseThirst: {
        fontSize: RFValue(15)
    },
    button:{
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
    location:{
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
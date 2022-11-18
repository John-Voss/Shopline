import * as React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Image, Text, TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

import AppTitle from '../components/AppHeader';

export default class CreateCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            transaction: [],
            isUserExist: false,
            userId: ''
        }
    }

    createUser = async (email, password) => {
        if (this.state.email && this.state.password && this.state.username) {
            if(this.state.password.length >= 6){
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    this.setState({
                        userId: user.uid
                    });
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
            this.setState({
                isUserExist: true
            })
            var userData = {
                userId: this.state.userId,
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                transaction: this.state.transaction,
                isUserExist: this.state.isUserExist
            }

            await firebase
                .database()
                .ref('/users/'+this.state.userId)
                .set(userData)
                .then(function (snapshot) { });
            this.props.navigation.navigate('DrawerNavigator');
        }else {
            Alert.alert(
                'Error!',
                'Senha precisa ter mais de cinco caractéres!',
                [{ text: '', onPress: () => console.log('OK PRECIONADO!') }],
                { cancelable: false }
            )
        }
        } else {
            Alert.alert(
                'Error!',
                'Todos os campos são obrigatórios!',
                [{ text: '', onPress: () => console.log('OK PRECIONADO!') }],
                { cancelable: false }
            )
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <AppTitle />

                <View style={styles.createCountContainer}>
                    <Text style={styles.createCountText}>Crie sua conta colocando suas informações:</Text>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.signInText}>Sign In</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => this.setState({ email: text })}
                        placeholder={"Email"}
                        placeholderTextColor={'gray'}
                        autoFocus
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: 20 }]}
                        onChangeText={text => this.setState({ username: text })}
                        placeholder={"Username"}
                        placeholderTextColor={"gray"}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: 20 }]}
                        onChangeText={text => this.setState({ password: text })}
                        placeholder={"Senha"}
                        placeholderTextColor={"gray"}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={[styles.button, { marginTop: 20 }]}
                        onPress={() => this.createUser(this.state.email, this.state.password)}
                    >
                        <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>

                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/signIn.png')} style={styles.image} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    // googleIcon: {
    //   width: RFValue(30),
    //   height: RFValue(30),
    //   resizeMode: "contain"
    // },
    // googleText: {
    //   color: "black",
    //   fontSize: RFValue(20)
    // },
    imageContainer: {
        flex: 0.05,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        top: RFValue(-310)
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 100,

    },
    textInputContainer: {
        flex: 0.4,
        width: '75%',
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 40,
        paddingTop: 30,
        paddingBottom: 200
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
        width: "75%",
        height: 65,
        padding: 15,
        fontSize: 20,
        color: "#000",
        backgroundColor: '#E6E6E6',
        borderRadius: 15
    },
    button: {
        width: "50%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6534",
        borderRadius: 15,
        marginTop: 20,
        // marginBottom: 20
    },
    buttonText: {
        fontSize: 24,
        color: "#fff",
    },
    signInText: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
        color: '#A6A6A6'
    },
    createCountText: {
        fontSize: 30,
        textAlign: 'center',
    },
    createCountContainer: {
        width: '85%',
        marginBottom: 80,
        marginTop: 20,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderTopColor: '#EBEBEB',
        borderBottomColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 30
    },
})
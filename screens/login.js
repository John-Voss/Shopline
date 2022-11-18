import * as React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Image, Text, TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

import AppTitle from '../components/AppHeader';

// import db from '../config'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      transaction: []
    }
  }

  signIn = (email, password) => {

    if (this.state.email && this.state.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            this.props.navigation.navigate('StackNavigator');
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Alert.alert('Error '+errorCode+' Email ou senha inválidos!')
            Alert.alert(
              'Error!',
              'Email ou senha inválidos!')
            // ..
          });
    } else {
      Alert.alert(
        'Error!',
        'Todos os campos são obrigatórios!',
        [{ text: 'Ok', onPress: () => console.log('OK PRECIONADO!') }],
        { cancelable: false }
      )

    }

  }

  render() {
    return (
      // <View style={styles.container}>
      //   <AppTitle />
      //   <View style={styles.buttonContainer}>
      //     <TouchableOpacity style={styles.button}>
      //       <Image style={styles.googleIcon} source={require('../assets/google_icon.png')} />
      //       <Text style={styles.googleText}>Logar com o Google</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <AppTitle />

        <View style={styles.createCountContainer}>
          <Text style={styles.lema}>Compre com Shopline</Text>

          <Text style={styles.createCountText1}>Não tem uma conta?</Text>

          <TouchableOpacity style={styles.createCountButton} onPress={() => this.props.navigation.navigate('CreateCount')}>
            <Text style={styles.createCountText2}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Email"}
            placeholderTextColor={'gray'}
            autoFocus
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
            // onPress={() => this.signIn(this.state.email, this.state.password)}
            onPress={() => this.props.navigation.navigate('StackNavigator')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image source={require('../assets/login.png')} style={styles.image} />
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
    top: RFValue(-240)
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 150,
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
    paddingTop: 20,
    paddingBottom: 80
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
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: '#A6A6A6'
  },
  createCountText1: {
    fontSize: 23,
    color: 'gray',
    marginRight: 125
  },
  createCountContainer: {
    width: '85%',
    // marginLeft: RFValue(80),
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
  lema: {
    marginBottom: 10,
    fontSize: 35,
    alignSelf: 'center'
  },
  createCountText2: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'orange'
  },
  createCountButton: {
    width: '30%',
    marginTop: -30,
    marginRight: -240
  }
})
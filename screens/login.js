import * as React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Image, Text, TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import AppTitle from '../components/AppHeader';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isUserExist: false
    }
  }

  createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }




  render() {
    const { email, password } = this.state;
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
            onPress={() => this.createUser(email, password)}
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
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  // buttonContainer: {
  //   flex: 0.3,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // button: {
  //   width: RFValue(250),
  //   height: RFValue(50),
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   borderRadius: RFValue(30),
  //   backgroundColor: "white",
  //   borderWidth: 5,
  //   borderRadius: 40,
  //   borderColor: 'black'
  // },
  // googleIcon: {
  //   width: RFValue(30),
  //   height: RFValue(30),
  //   resizeMode: "contain"
  // },
  // googleText: {
  //   color: "black",
  //   fontSize: RFValue(20)
  // },
  // cloudContainer: {
  //   flex: 0.3
  // },
  // cloudImage: {
  //   position: "absolute",
  //   width: "100%",
  //   resizeMode: "contain",
  //   bottom: RFValue(-5)
  // }
  imageContainer: {
    flex: 0.1,
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom: 100,
    position: 'relative',
    top: -370
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
    marginTop: 20
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
  }
})
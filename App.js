import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigator from './navigation/drawerNavigation';
import Login from './screens/login';
import CreateCount from './screens/createCount';


import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default class App extends React.Component{
    render(){
        return(
          <NavigationContainer>
            <AppContainer/>
          </NavigationContainer>
        )
    }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: Login,
  DrawerNavigator: DrawerNavigator,
  CreateCount: CreateCount
})
const AppContainer = createAppContainer(AppSwitchNavigator)

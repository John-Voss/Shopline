import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/drawerNavigation';


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
            <DrawerNavigator/>
          </NavigationContainer>
        )
    }
}

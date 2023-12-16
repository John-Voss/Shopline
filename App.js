import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigator from './navigation/drawerNavigation';
import StackNavigator from './navigation/stackNavigation';
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
  StackNavigator: StackNavigator,
  CreateCount: CreateCount
})
const AppContainer = createAppContainer(AppSwitchNavigator)

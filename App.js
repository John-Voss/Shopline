import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/drawerNavigation';

export default class App extends React.Component{
    render(){
        return(
          <NavigationContainer>
            <DrawerNavigator/>
          </NavigationContainer>
        )
    }
}

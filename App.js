import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from './navigation/tabNavigation';

export default class App extends React.Component{
    render(){
        return(
          <NavigationContainer>
            <BottomTab/>
          </NavigationContainer>
        )
    }
}

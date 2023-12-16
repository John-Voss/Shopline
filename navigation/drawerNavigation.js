import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserScreen from '../screens/userScreen';
import TabNavigator from './tabNavigation'

const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name='Início' component={TabNavigator}/>
                <Drawer.Screen name='Usuário' component={UserScreen}/>
            </Drawer.Navigator>
        )
    }

}
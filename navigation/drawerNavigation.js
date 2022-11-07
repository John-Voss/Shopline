import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/login';
import UserScreen from '../screens/userScreen';
import LogoutScreen from '../screens/logout';
import ChooseSupermarket from '../screens/chooseSuperMarket';
import StackNavigator from './stackNavigation';

const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name='Início' component={StackNavigator}/>
                <Drawer.Screen name='Login' component={LoginScreen}/>
                <Drawer.Screen name='Logout' component={LogoutScreen}/>
                <Drawer.Screen name='Supermercado' component={ChooseSupermarket}/>
                <Drawer.Screen name='Usuário' component={UserScreen}/>
            </Drawer.Navigator>
        )
    }

}
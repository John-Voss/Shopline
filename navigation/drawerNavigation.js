import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserScreen from '../screens/userScreen';
import ChooseSupermarket from '../screens/chooseSuperMarket';
import TabNavigator from './tabNavigation'
import StackNavigator from './stackNavigation';

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
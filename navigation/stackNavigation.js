import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseThirst from '../screens/chooseThirst';
import TabNavigator from './tabNavigation';
import FinishShop from '../screens/finishShop';
import DrawerNavigator from './drawerNavigation';
import ChooseSupermarket from '../screens/chooseSuperMarket';
import MapScreen from '../screens/mapScreen';

const Stack = createStackNavigator();
export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName='Supermercado'>
                <Stack.Screen name='Início' component={DrawerNavigator}/>
                <Stack.Screen name='Mapa' component={MapScreen}/>
                <Stack.Screen name='Supermercado' component={ChooseSupermarket}/>
                <Stack.Screen name='Sede' component={ChooseThirst}/>
                <Stack.Screen name='Finalizar compra' component={FinishShop}/>
            </Stack.Navigator>
        )
    }
}
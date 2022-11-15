import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tabNavigation'
import FinishShop from '../screens/finishShop';

const Stack = createStackNavigator();
export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName='início'>
                <Stack.Screen name='Início' component={TabNavigator}/>
                <Stack.Screen name='Finalizar compra' component={FinishShop}/>
            </Stack.Navigator>
        )
    }
}
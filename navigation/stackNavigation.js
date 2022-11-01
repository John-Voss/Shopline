import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tabNavigation'
import FinishShop from '../screens/finishShop';

const Stack = createStackNavigator();
export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={TabNavigator}/>
                <Stack.Screen name='Finish Shop' component={FinishShop}/>
            </Stack.Navigator>
        )
    }
}
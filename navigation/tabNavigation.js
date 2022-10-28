import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native'
import {Ionicons} from 'react-native-vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import ChooseSupermarket from '../screens/chooseSuperMarket';
import ChooseThirst from '../screens/chooseThirst';
import ScanningScreen from '../screens/scanningScreen';
import ShoppingList from '../screens/shoppingList';

const Tab = createMaterialBottomTabNavigator();
export default class BottomTab extends React.Component{
    render(){
        return(
            <Tab.Navigator 
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    var iconName;
                    if (route.name === 'ChooseThirst') {
                        iconName = focused ? 'location' : 'location-sharp'
                    } else if (route.name === 'ScanningScreen') {
                        iconName = focused ? 'qr-code' : 'qr-code-outline'
                    } else if(route.name === 'ShoppingList'){
                        iconName = focused ? 'cart' : 'cart-sharp'
                    } else if(route.name === 'ChooseSupermarket') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    return <Ionicons name={iconName} size={RFValue(30)} color={color} style={styles.icons} />
                },
            })}
            activeColor={'#ee8249'}
            inactiveColor={'gray'}>
                <Tab.Screen name='ChooseSupermarket' component={ChooseSupermarket}/>
                <Tab.Screen name='ChooseThirst' component={ChooseThirst}/>
                <Tab.Screen name='ScanningScreen' component={ScanningScreen}/>
                <Tab.Screen name='ShoppingList' component={ShoppingList}/>
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#0FE324",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    // bottomTabStyleLight: {
    //     backgroundColor: "#eaeaea",
    //     height: "8%",
    //     borderTopLeftRadius: RFValue(30),
    //     borderTopRightRadius: RFValue(30),
    //     overflow: "hidden",
    //     position: "absolute"
    // },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
})

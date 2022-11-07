import * as React from 'react';
import {View, Text} from 'react-native';

import AppTitle from '../components/AppHeader';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <AppTitle/>
            </View>
        )
    }
}
import * as React from 'react';
import {View, Text} from 'react-native';

import AppTitle from '../components/AppHeader';

export default class UserScreen extends React.Component{
    render(){
        return(
            <View>
                <AppTitle/>
            </View>
        )
    }
}
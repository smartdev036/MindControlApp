'use strict';

import * as React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assests/images/app-logo.png')} style={{ width: '90%', height: 70 }} />
        </View>
    );
}

const SplashScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="splashScreen" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="splashScreen" component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default SplashScreenStack;
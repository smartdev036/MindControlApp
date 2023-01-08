'use strict';

import * as React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Style } from '../../assests/css/_common';

const AppInfo = ({ navigation, ...props }) => {

    return (
        <View style={{ flex: 1, alignItem: "center", justifyContent: 'center', backgroundColor: '#358775' }}>
            <View style={{ marginVertical: '5%', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assests/images/logo-coloured.png')} style={{ width: '90%', height: 60 }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...Style.font, color: '#7cbd8d', textAlign: 'center', fontSize: 24 }}>
                    Relaxation and Mindfulness
                </Text>
            </View>

            <View style={{ display: 'flex', alignItems: 'center', paddingTop: '40%' }}>
                <Button
                    onPress={() => navigation.navigate('Sign Up')}
                    icon={
                        <Icon
                            name="address-card"
                            size={15}
                            color="white"
                            style={{ paddingLeft: 15 }}
                        />
                    }
                    iconRight
                    title="Register"
                    buttonStyle={{
                        ...Style.font, width: 250, height: 60, backgroundColor: '#002a4a', marginBottom: '5%', display: 'flex',
                        justifyContent: 'center', borderRadius: 30
                    }}
                />
                <Button
                    onPress={() => navigation.navigate('Sing In')}
                    icon={
                        <Icon
                            name="sign-in"
                            size={20}
                            color="white"
                            style={{ paddingLeft: 15 }}
                        />
                    }
                    iconRight
                    title="Log In"
                    buttonStyle={{ ...Style.font, width: 250, height: 60, backgroundColor: '#002a4a', display: 'flex', justifyContent: 'center', borderRadius: 30 }}
                />
            </View>
        </View>
    )
}

export default AppInfo;
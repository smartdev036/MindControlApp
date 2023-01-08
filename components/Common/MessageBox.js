import * as React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Style } from '../../assests/css/_common';

const MessageBox = ({ message, showMessageBox, setShowMessageBox }) => {

    if (showMessageBox) {
        return (
            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#808080b8', width: '100%', height: '100%' }}>
                <TouchableHighlight underlayColor='transparent' onPress={() => setShowMessageBox(false)}>
                    <View style={{ backgroundColor: 'white', margin: 'auto', borderRadius: 5, alignItems: 'center', marginHorizontal: '15%' }}>
                        <View style={{ position: 'absolute', height: 40, width: '100%', backgroundColor: '#358775' }}>
                            <Icon name='clear' size={20} containerStyle={{ marginLeft: 'auto' }}></Icon>
                        </View>
                        <Image source={require('../../assests/images/info-outline.png')} style={{ width: 50, height: 50, marginTop: 30, borderColor: 'white', borderWidth: 3, borderRadius: 50 }} />
                        <View style={{ padding: 25 }}>
                            <Text style={{ ...Style.font, textAlign: 'center', fontSize: 14 }}>{message}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View >
        );
    } else {
        return <View></View>
    }
}

export default MessageBox;
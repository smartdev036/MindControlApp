'use strict';

import * as React from 'react';
import { View, Image } from 'react-native';
import { Text, Avatar, Slider } from 'react-native-elements';

import Footer from '../Common/Footer';
import MessageBox from '../Common/MessageBox';


import { Style } from '../../assests/css/_common';


const CompletionScreen = ({ navigation, route: { params }, ...props }) => {

    const [showMessageBox, setShowMessageBox] = React.useState(false);

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, []);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            paddingTop: '5%'
        }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text h4 style={{ ...Style.font, color: '#358775', textAlign: 'center', paddingTop: 10 }}>Track Complete</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require("../../assests/images/group-updated.png")} style={{ position: 'absolute' }} />
                <Avatar
                    rounded
                    size={98}
                    activeOpacity={0.7}
                    containerStyle={{ justifyContent: 'center' }}
                    overlayContainerStyle={Style.ButtonsBackgroundColor}
                    avatarStyle={{ height: 200, width: 100 }}
                    icon={{ name: 'check', type: 'font-awesome' }} />
            </View>
            <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7cbd8d' }}>
                    <Avatar
                        rounded
                        size={100}
                        overlayContainerStyle={Style.ButtonsBackgroundColor}
                        titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
                        onPress={() => navigation.canGoBack() ? navigation.popToTop() : navigation.navigate('categories')}
                        title={'Home'} />
                </View>
                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7cbd8d' }}>
                    <Avatar
                        rounded
                        size={100}
                        overlayContainerStyle={Style.ButtonsBackgroundColor}
                        titleStyle={{ fontSize: 14, fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('categoryDetail')}
                        title={params.name} />
                </View>
            </View>

            <MessageBox message={"Track Complete."} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>

            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>
        </View>
    )
}

export default CompletionScreen;

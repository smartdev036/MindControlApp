'use strict';

import * as React from 'react';
import { ScrollView, View, Image, TouchableHighlight } from 'react-native';
import { Text, ListItem, Avatar } from 'react-native-elements';

import Footer from '../Common/Footer';
import MessageBox from '../Common/MessageBox';

import { Style } from '../../assests/css/_common';
import { categoryTypes } from '../../services/common.service';


const CategoriesScreen = ({ navigation, ...props }) => {

    const [showMessageBox, setShowMessageBox] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <View style={{ ...Style.Container, justifyContent: 'flex-start', width: '100%', paddingTop: 20 }}>
            <ScrollView contentContainerStyle={{ minWidth: '100%', paddingBottom: 65 }}>
                {categoryTypes.map((item) => (
                    <View key={item.name} style={{ height: 90, justifyContent: 'flex-start', width: '100%', paddingTop: 10, paddingHorizontal: 25 }}>
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="transparent"
                            onPress={() => navigation.navigate('categoryDetail', item)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 15 }}>
                                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image source={item.image} style={item.style} />
                                </View>
                                <Text style={{ ...Style.fontBold, fontSize: 16, paddingLeft: '8%', color: '#3f525a' }}>{item.name}</Text>
                                <Image source={require("../../assests/images/arrow-right.png")} style={{ width: 25, height: 25, marginLeft: 'auto', marginRight: 10 }} />
                            </View>
                        </TouchableHighlight>
                        <View style={{ borderWidth: 0.4, borderColor: '#358775' }}></View>
                    </View>
                ))}
            </ScrollView>
            <MessageBox message={"Please select a category to view the relaxation and mindfulness tracks available."} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} />
            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>
        </View>
    );

}

export default CategoriesScreen;
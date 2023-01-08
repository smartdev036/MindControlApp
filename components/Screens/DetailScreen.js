'use strict';

import * as React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import Accordion from '../Common/Accordion';
import MessageBox from '../Common/MessageBox';

import Footer from '../Common/Footer';

import { Style } from '../../assests/css/_common';


const DetailScreen = ({ navigation, route: { params }, ...props }) => {
    const [showMessageBox, setShowMessageBox] = React.useState(false);

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, []);

    const navigateToPlay = (detail, music) => {
        // console.log(detail.title)
        if (detail.skipController) {
            navigation.navigate('musicPlay', { ...params, ...detail, music: music })
        } else {
            navigation.navigate('musicSetting', { ...params, ...detail, music: music })
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: '7%' }}>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: '5%'
                    }}
                    >
                        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={params.image} style={params.avatarStyle} />
                        </View>
                    </View>
                    <View
                        style={{ width: '100%' }}>
                        <View style={{ width: '100%' }}>
                            {params.showDetailText != false && <>
                                <Text style={{ ...Style.font, fontSize: 16, lineHeight: 24, color: '#3f525a', textAlign: 'justify' }}>{params.upperMessage}</Text>
                            </>}
                            <Text style={{ ...Style.fontBold, fontSize: 20, color: '#358775', textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>Please select a track below: </Text>
                        </View>

                        {params.details && params.details.map((item, index) => (
                            <Accordion
                                image={item.image}
                                title={item.title}
                                subTitle={item.innerContent}
                                onPress={() => {
                                    // console.log(item.title + ' selected');
                                    if (item.video || item.music) {
                                        navigateToPlay(item, item.video ? item.video : item.music);
                                        return true;
                                    }
                                    else if (item.link) {
                                        Linking.openURL(item.link);
                                        return true
                                    }
                                    return false;
                                }}
                                nextPage={item.music || item.link}
                                key={`index${index}`}>
                                {
                                    <>
                                        <Text style={{ ...Style.font, color: '#3f525a' }}>{item.extraContent}</Text>
                                        {item.subCategory && item.subCategory.map((subItem, itemIndex) => (
                                            subItem.subContent &&
                                            <>
                                                <View key={'itemIndex' + itemIndex} style={{ width: '100%', paddingHorizontal: '1%' }}>
                                                    <Text style={{ ...Style.font, fontSize: 16, color: '#3f525a', textAlign: 'justify' }}>{subItem.subContent}</Text>
                                                </View>
                                            </>
                                        ))}
                                        {item.subCategory && item.subCategory.map((subItem, itemIndex) => (
                                            (subItem.items || subItem.levels) ?
                                                <View style={{ paddingLeft: 5, paddingRight: 5, marginTop: -20 }} key={'itemIndex' + itemIndex}>
                                                    <Accordion
                                                        noSeperator={true}
                                                        image={require('../../assests/images/speaker.png')}
                                                        title={subItem.title}
                                                        subTitle={item.innerContent}
                                                        imageContainerStyle={{ width: 30, height: 30 }}
                                                        imageStyle={{ width: 22, height: 22 }}
                                                        onPress={() => {
                                                            // console.log(subItem.title + ' selected')
                                                            if (subItem.video || subItem.music) {
                                                                navigateToPlay(subItem, subItem.video ? subItem.video : subItem.music);
                                                                return true;
                                                            }
                                                            else if (subItem.link) {
                                                                Linking.openURL(subItem.link);
                                                                return true
                                                            }
                                                            return false;
                                                        }}
                                                        nextPage={subItem.music || subItem.link}
                                                        key={`${index}-${itemIndex}`}>
                                                        {
                                                            subItem.items && subItem.items.map((subSubItem, iIndex) =>
                                                                <TouchableOpacity
                                                                    onPress={() => {
                                                                        // console.log(subSubItem.title + ' selected');
                                                                        if (subSubItem.video || subSubItem.music) {
                                                                            if (subSubItem.skipController) {
                                                                                navigation.navigate((subSubItem.video ? 'videoPlay' : 'musicPlay'), { ...params, ...subSubItem, title: subItem.title, music: subSubItem.video ? subSubItem.video : subSubItem.music })
                                                                            } else {
                                                                                navigation.navigate('musicSetting', { ...params, ...subSubItem, title: subItem.title, music: subSubItem.video ? subSubItem.video : subSubItem.music })
                                                                            }
                                                                        } else {
                                                                            Linking.openURL(subSubItem.link)
                                                                        }
                                                                    }}
                                                                    key={`${index}-${itemIndex}=${iIndex}`}>
                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 25, marginHorizontal: '4%' }}>
                                                                        <View style={{ width: 25, height: 25, borderRadius: 30, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
                                                                            <Image source={require('../../assests/images/speaker.png')} style={{ width: 15, height: 15 }} />
                                                                        </View>
                                                                        <Text style={{ paddingLeft: '3%', color: '#3f525a', ...Style.fontBold }}>{subSubItem.title}   {subSubItem.extraContent && <Text style={{ ...Style.font, color: '#7cbd8d', fontSize: 12 }}>({subSubItem.extraContent})</Text>}</Text>
                                                                        <Image source={require("../../assests/images/arrow-right.png")} style={{ width: 18, height: 18, marginLeft: 'auto' }} />
                                                                    </View>
                                                                </TouchableOpacity>)
                                                        }

                                                    </Accordion>
                                                </View>
                                                : <View key={Math.random()}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            // console.log(subItem, params, item)
                                                            if (subItem.music || subItem.video) {
                                                                if (subItem.skipController) {
                                                                    // console.log(subItem.title)
                                                                    navigation.navigate((subItem.video ? 'videoPlay' : 'musicPlay'), { ...params, ...subItem, music: subItem.video ? subItem.video : subItem.music })
                                                                } else {
                                                                    navigation.navigate('musicSetting', { ...params, ...subItem })
                                                                }
                                                            } else {
                                                                Linking.openURL(subItem.link)
                                                            }
                                                        }}
                                                        key={`${index}-${itemIndex}`}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 15, paddingRight: 10, paddingBottom: 15 }}>
                                                            <View style={{ width: 25, height: 25, borderRadius: 30, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
                                                                <Image source={require('../../assests/images/video.png')} style={{ width: 15, height: 15 }} />
                                                            </View>
                                                            <Text style={{ paddingLeft: '8%', color: '#3f525a', ...Style.fontBold }}>{subItem.title}   {subItem.extraContent && <Text style={{ ...Style.font, color: '#7cbd8d', fontSize: 12 }}>({subItem.extraContent})</Text>}</Text>
                                                            <Image source={require("../../assests/images/arrow-right.png")} style={{ width: 18, height: 18, marginLeft: 'auto' }} />
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                        ))}
                                    </>
                                }
                            </Accordion>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <MessageBox message={params.infoMessage || "Select a subcategory to view the audio files available."} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>
            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>
        </ScrollView>
    );
}

export default DetailScreen;

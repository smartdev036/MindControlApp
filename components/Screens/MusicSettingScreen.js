'use strict';

import * as React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, Avatar, Slider } from 'react-native-elements';

import MessageBox from '../Common/MessageBox';
import Footer from '../Common/Footer';

import { Style } from '../../assests/css/_common';


const MusicSettingScreen = ({ navigation, route: { params }, ...props }) => {

    const [duration, setDuration] = React.useState(5)
    const [breathingTime, setBreathingTime] = React.useState(6)
    const [level, setLevel] = React.useState(6)
    const [showMessageBox, setShowMessageBox] = React.useState(false);
    const [durationSlider, setDurationSlider] = React.useState(false);
    // const [duration, setDuration] = React.useState(0);

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
        if (params.levels) {
            const index = params.levels.findIndex(a => a.music == params.music || a.video == params.video || a.video == params.music);
            setLevel(index || 0);
        }
    }, []);

    React.useEffect(() => {
        setDurationSlider(params.levels[level].durationFile)
    }, [level])

    const palyMusic = () => {
        if (params.levels) {
            if (params.levels[level].isVideo && Array.isArray(params.levels[level].durationFile)) {
                return navigation.navigate('videoPlay', { ...params, duration, speed: params.levels[level].speed, infoMessage: params.levels[level].infoMessage, video: params.levels[level].durationFile[duration / 5 - 1] })
            }
            if (params.levels[level].isVideo) {
                return navigation.navigate('videoPlay', { ...params, duration, speed: params.levels[level].speed, infoMessage: params.levels[level].infoMessage, video: params.levels[level].video })
            }
            if (params.levels[level].durationFile) {
                return navigation.navigate('musicPlay', { ...params, duration, speed: params.levels[level].speed, music: params.levels[level].durationFile[duration / 5 - 1], })
            }
            navigation.navigate('musicPlay', { ...params, duration, speed: params.levels[level].speed, music: params.levels[level].music, infoMessage: params.levels[level].infoMessage })
        } else {
            navigation.navigate('musicPlay', { ...params, duration, speed: breathingTime })
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingTop: '2%',
                paddingBottom: '2%'
            }}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >

                        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={params.image} style={params.avatarStyle} />
                        </View>
                    </View>
                    <View
                        style={{ flex: 1, width: '100%', paddingHorizontal: '10%' }}>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text h4 style={{ ...Style.font, color: '#3f525a', textAlign: 'center', paddingTop: 10 }}>{params.title}</Text>
                            <Text style={{ ...Style.font, lineHeight: 20, color: '#7cbd8d', textAlign: 'center', fontSize: 25, lineHeight: 28, paddingTop: 10 }}>{params.type}</Text>
                        </View>
                        {false && !params.levels && <View style={{ paddingTop: '5%' }}>
                            <Text style={{ ...Style.font, lineHeight: 20, color: '#3f525a', lineHeight: 20, fontSize: 16, textAlign: 'center' }}>How long would you like the exercise to last?</Text>
                            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginTop: '5%' }}>
                                <Slider
                                    maximumValue={10}
                                    minimumValue={1}
                                    thumbTintColor={'#358775'}
                                    step={1}
                                    value={duration}
                                    style={{ marginTop: 10 }}
                                    trackStyle={{ borderWidth: 2, borderRadius: 50, height: 8, borderColor: '#358775' }}
                                    minimumTrackTintColor={'#358775'}
                                    maximumTrackTintColor={'white'}
                                    onValueChange={(value) => setDuration(value)}
                                />
                                <Text style={{ ...Style.font, fontSize: 30, alignSelf: 'center', textAlign: 'center', padding: 4, borderColor: '#358775', borderWidth: 2, backgroundColor: '#358775', borderRadius: 50, width: 50, color: 'white' }}>{duration}</Text>
                                <Text style={{ ...Style.font, padding: 10, color: '#3f525a', lineHeight: 20, fontSize: 16, textAlign: 'center' }}>Minutes</Text>
                            </View>
                        </View>}
                        {!params.levels && <View style={{ marginTop: '1%' }}>
                            <Text style={{ ...Style.font, lineHeight: 20, color: '#3f525a', lineHeight: 20, fontSize: 16, textAlign: 'center' }}>Choose your breathing pace</Text>
                            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                                <Slider
                                    maximumValue={9}
                                    minimumValue={1}
                                    thumbTintColor={'#358775'}
                                    step={1}
                                    value={breathingTime}
                                    style={{ marginTop: 10 }}
                                    trackStyle={{ borderWidth: 2, borderRadius: 50, height: 8, borderColor: '#358775' }}
                                    minimumTrackTintColor={'#358775'}
                                    maximumTrackTintColor={'white'}
                                    onValueChange={(value) => setBreathingTime(value)}
                                />
                                <Text style={{ ...Style.font, fontSize: 30, alignSelf: 'center', textAlign: 'center', padding: 4, borderColor: '#358775', borderWidth: 2, backgroundColor: '#358775', borderRadius: 50, width: 50, color: 'white' }}>{breathingTime}</Text>
                                {/* <Text style={{ ...Style.font ,padding: 10, color: '#3f525a', lineHeight: 20, fontSize: 16, textAlign: 'center' }}>Seconds</Text> */}
                            </View>
                        </View>}
                        {params.levels && <View style={{ marginTop: '1%' }}>
                            <Text style={{ ...Style.font, color: '#3f525a', lineHeight: 20, fontSize: 16, textAlign: 'center' }}>Choose your breathing pace</Text>
                            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', width: '100%' }}>
                                <Slider
                                    maximumValue={params.levels ? params.levels.length - 1 : 0}
                                    minimumValue={0}
                                    thumbTintColor={'#358775'}
                                    step={1}
                                    value={level}
                                    trackStyle={{ borderWidth: 2, borderRadius: 50, height: 8, borderColor: '#358775' }}
                                    minimumTrackTintColor={'#358775'}
                                    maximumTrackTintColor={'white'}
                                    onValueChange={(value) => setLevel(value)}
                                />
                                <Text style={{ ...Style.font, fontSize: 30, alignSelf: 'center', textAlign: 'center', padding: 4, borderColor: '#358775', borderWidth: 2, backgroundColor: '#358775', borderRadius: 50, width: 50, color: 'white' }}>{level + 1}</Text>
                            </View>
                        </View>}
                        {durationSlider && <View style={{ marginTop: '4%' }}>
                            <Text style={{ ...Style.font, color: '#3f525a', marginTop: 10, lineHeight: 20, fontSize: 16, textAlign: 'center' }}>Choose length of relaxation</Text>
                            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                                <Slider
                                    maximumValue={20}
                                    minimumValue={5}
                                    thumbTintColor={'#358775'}
                                    step={5}
                                    value={duration}
                                    trackStyle={{ borderWidth: 2, borderRadius: 50, height: 8, borderColor: '#358775' }}
                                    minimumTrackTintColor={'#358775'}
                                    maximumTrackTintColor={'white'}
                                    onValueChange={(value) => setDuration(value)}
                                />
                                <Text style={{ ...Style.font, fontSize: 30, alignSelf: 'center', textAlign: 'center', padding: 4, borderColor: '#358775', borderWidth: 2, backgroundColor: '#358775', borderRadius: 50, width: 50, color: 'white' }}>{duration}</Text>
                            </View>
                        </View>}
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
                            <Avatar
                                rounded
                                size={120}
                                overlayContainerStyle={Style.ButtonsBackgroundColor}
                                titleStyle={{ fontSize: 24, fontWeight: 'bold' }}
                                onPress={() => palyMusic()}
                                title="START" />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <MessageBox message={params.infoMessage || "Choose your breathing pace in scale from 1 to 9, where level 1 is the fastest, and level 9 is the slowest."} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>
            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>
        </ScrollView>
    );
}

export default MusicSettingScreen;

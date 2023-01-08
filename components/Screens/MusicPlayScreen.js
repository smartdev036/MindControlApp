'use strict';

import * as React from 'react';
import { Animated, View, ActivityIndicator, Dimensions, StyleSheet, Easing } from 'react-native';
import { Text, Avatar, Slider } from 'react-native-elements';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EntypoIcons from 'react-native-vector-icons/dist/Entypo';
// import SoundPlayer from 'react-native-sound-player';
import Sound from 'react-native-sound';

import MessageBox from '../Common/MessageBox';
import Footer from '../Common/Footer';

import { Style } from '../../assests/css/_common';
import { config } from '../../services/common.service';
import { loopAnimations } from '../utils/loopAnimations';
import { interpolateScale, interpolateTranslateY } from '../utils/interpolate';
import { animate } from '../utils/animate';


let duration = 1;
var SoundPlayer;
var musicTimeOut;
var inhaleInterval;
var exhaleInterval;
const circleSize = 350;
const fadeInAnimDuration = 400;



const MusicPlayScreen = ({ navigation, route: { params }, ...props }) => {


    const steps = [{
        id: "inhale",
        label: "Breathe In",
        duration: params.speed * 375, // this is 3/8 of the cycle
        showDots: false,
        skipped: false
    },
    {
        id: "afterInhale",
        label: "Hold",
        duration: params.speed * 125, // this is 1/8 of the cycle
        showDots: true,
        skipped: false
    },
    {
        id: "exhale",
        label: "Breathe Out",
        duration: params.speed * 500, // this is 4/8 of the cycle
        showDots: false,
        skipped: false
    },
    {
        id: "afterExhale",
        label: "Hold",
        duration: 0,
        showDots: true,
        skipped: true
    },]

    const url = async () => {
        let settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "folder": "audio_tracks",
                "fileName": params.music
            })
        }

        const response = await fetch(config.tracksURL, settings);
        if (!response.ok) throw Error(response.message);

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    const windowWidth = Math.round(Dimensions.get('window').width);


    const [showMessageBox, setShowMessageBox] = React.useState(false);


    const [musicPlayTime, setMusicPlayTime] = React.useState(0)
    const [isPlaying, setIsPlaying] = React.useState(true)
    const [isLoading, setIsLoading] = React.useState(true);


    const [showUpAnimVal] = React.useState(new Animated.Value(0));
    const [scaleAnimVal] = React.useState(new Animated.Value(0));
    const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

    const [value, setValue] = React.useState(0)

    const activeSteps = steps.filter((x) => !x.skipped);
    const currentStep = activeSteps[currentStepIndex];

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name
        });
        setTimeout(() => playMusic(), 200);
        return end;
    }, []);


    const end = () => {
        if (musicTimeOut) {
            clearInterval(musicTimeOut);
        }

        if (exhaleInterval) {
            clearInterval(exhaleInterval);
        }

        if (inhaleInterval) {
            clearInterval(inhaleInterval);
        }
        SoundPlayer.pause();
        SoundPlayer.stop();

    }


    const playMusic = async () => {
        let link = await url()
        // console.log(data.url);
        //   console.log(url + params.music);
        try {
            SoundPlayer = new Sound(link.url, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the soundtrack', error);
                    return;
                }
                duration = SoundPlayer.getDuration();
                SoundPlayer.setNumberOfLoops(0);
                Sound.setCategory()
                SoundPlayer.setNumberOfLoops(1);
                SoundPlayer.play((success) => {
                    if (success) {
                        navigation.navigate('complete', params)
                    }

                });
                setTimeout(() => assign(), 500);;
            })
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    const assign = () => {
        setIsLoading(false);
        showUpAnimation.start(({ finished }) => {
            if (finished) {
                startAnimationSteps();
            }
        });
        musicTimeOut = setInterval(() => {
            SoundPlayer.getCurrentTime((seconds, isPlaying) => {
                setMusicPlayTime(seconds);
                if ((duration - seconds) < 1) {
                    end();
                    navigation.navigate('complete', params)
                }
            });
        }, 200);

    }

    const handleBegining = () => {
        if (SoundPlayer) {
            SoundPlayer.setCurrentTime(0);
            SoundPlayer.play();
        }
    }
    const handleAddFiveSeconds = () => {
        if (SoundPlayer) {
            SoundPlayer.getCurrentTime((seconds) => {
                if (seconds > 5) {
                    SoundPlayer.setCurrentTime(seconds - 5)
                }
            })
        }
    }
    const handleSubtractFiveSeconds = () => {
        if (SoundPlayer) {
            SoundPlayer.getCurrentTime((seconds) => {
                console.log(duration - seconds)
                if ((seconds + 5) < duration) {
                    SoundPlayer.setCurrentTime(seconds + 5)
                }
            })
        }
    }

    const pauseAudio = () => {
        if (exhaleInterval) {
            clearInterval(exhaleInterval);
        }

        if (inhaleInterval) {
            clearInterval(inhaleInterval);
        }
        let pause;
        pause = startAnimationSteps();
        pause();
        if (SoundPlayer) {
            SoundPlayer.pause();
            setIsPlaying(false);
        }
        if (musicTimeOut) {
            clearInterval(musicTimeOut);
        }

        if (exhaleInterval) {
            clearInterval(exhaleInterval);
        }

        if (inhaleInterval) {
            clearInterval(inhaleInterval);
        }
    }

    const resumeAudio = () => {
        startAnimationSteps();
        // onStepStart(0);
        if (SoundPlayer) {
            SoundPlayer.play();
            setIsPlaying(true);
        }
        musicTimeOut = setInterval(() => {
            SoundPlayer.getCurrentTime((seconds, isPlaying) => {
                setMusicPlayTime(seconds);
            })
        }, 200);

    }

    const animateStep = (toValue, duration) => {

        return Animated.parallel([
            animate(scaleAnimVal, {
                toValue: toValue,
                duration: duration,
            }),
        ]);

    };


    const startAnimationSteps = () => {
        const createStepAnimations = () =>
            activeSteps.map((x) =>
                animateStep(
                    x.id === "inhale" || x.id === "afterInhale" ? 1 : 0,
                    x.duration
                )
            );
        const stopLoop = loopAnimations(createStepAnimations, onStepStart);
        return stopLoop;
    };

    const showUpAnimation = animate(showUpAnimVal, {
        toValue: 1,
        duration: fadeInAnimDuration,
    });

    const circleAnimatedStyle = {
        transform: [
            interpolateScale(scaleAnimVal, {
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
        ],
    };

    const onStepStart = (stepIndex) => {
        setCurrentStepIndex(stepIndex);
        setValue(0);
        if (stepIndex === 0) {
            if (exhaleInterval) clearInterval(exhaleInterval);
            inhaleInterval = setInterval(() => {
                // console.log(value)
                setValue(prev => { if (prev < 3) return prev + 1; else return prev });
            }, params.speed / 4 * 375);
        }
        if (stepIndex === 1 || stepIndex === 3) {
            if (exhaleInterval) clearInterval(exhaleInterval);
            if (inhaleInterval) clearInterval(inhaleInterval);
        }

        if (stepIndex === 2) {
            if (inhaleInterval) clearInterval(inhaleInterval);
            exhaleInterval = setInterval(() => {
                setValue(prev => { if (prev < 4) return prev + 1; else return prev });
            }, params.speed / 5 * 500);
        }
    };


    const timeFormater = (duration) => {
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingTop: '1%'
            }}>
                <View style={{ minHeight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ lineHeight: 20, color: '#7cbd8d', textAlign: 'center', fontSize: 20, lineHeight: 28, paddingTop: 10 }}>{params.orange_title || params.title}</Text>
                </View>
                {!params.hideAnimation &&
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Animated.View style={[styles.container,]}>
                            <Animated.View style={[styles.circle, circleAnimatedStyle, { borderColor: '#f08c60', borderWidth: currentStepIndex === 1 ? 4 : 0 }]} />
                            <Animated.View style={styles.circleMax} />
                            <Animated.View style={[styles.content,]}>
                                {<Avatar
                                    // rounded
                                    // size={80}
                                    // activeOpacity={0.7}
                                    containerStyle={{ justifyContent: 'center' }}
                                    // overlayContainerStyle={{ backgroundColor: '#5ce0db' }}
                                    titleStyle={{ fontSize: 42, fontWeight: 'bold', lineHeight: 65 }}
                                // title={currentStepIndex === 1 || isLoading || !isPlaying || currentStepIndex === 3 || value === 0 ? ' ' : value.toString()}
                                />}
                            </Animated.View>
                        </Animated.View>
                    </View>}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: '2%' }}>

                    {!params.hideAnimation && !isLoading && <Text style={{ ...Style.fontBold, color: '#3f525a', paddingTop: 10, fontSize: 25 }}>{currentStepIndex === 3 ? ' ' : currentStep.label}</Text>}

                    <Slider
                        maximumValue={duration}
                        minimumValue={0}
                        thumbTintColor={'#358775'}
                        disabled={true}
                        thumbStyle={{ width: 1, height: 1 }}
                        value={musicPlayTime}
                        style={{ marginTop: 0 }}
                        trackStyle={{ borderWidth: 2, borderRadius: 50, height: 8, borderColor: '#358775', minWidth: '80%' }}
                        minimumTrackTintColor={'#358775'}
                        maximumTrackTintColor={'white'}
                    />
                    {params.introduction &&
                        <Text style={{ ...Style.font, color: '#7cbd8d', paddingTop: 10, fontSize: 25 }}>{timeFormater(musicPlayTime.toFixed(0))} / {timeFormater(duration.toFixed(0))} </Text>
                    }
                    {params.introduction && <View
                        style={styles.innerWrapper}
                    >
                        <View style={styles.control}>
                            <TouchableOpacity onPress={handleAddFiveSeconds} style={{ paddingRight: 15 }}>
                                <EntypoIcons color="#fff" size={40} name="controller-fast-backward" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleBegining} style={{ paddingRight: 15 }}>
                                <EntypoIcons color="#fff" size={40} name="controller-jump-to-start" />
                            </TouchableOpacity>

                            {isPlaying &&
                                <TouchableOpacity onPress={pauseAudio} style={{ paddingRight: 15 }}>
                                    <EntypoIcons color="#fff" size={40} name="controller-paus" />
                                </TouchableOpacity>
                            }

                            {!isPlaying &&
                                <TouchableOpacity onPress={resumeAudio} style={{ paddingRight: 15 }}>
                                    <EntypoIcons color="#fff" size={40} name="controller-play" />
                                </TouchableOpacity>
                            }

                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ paddingRight: 15 }}>
                                <EntypoIcons color="#fff" size={40} name="controller-stop" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleSubtractFiveSeconds}>
                                <EntypoIcons color="#fff" size={40} name="controller-fast-forward" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    }
                </View>
            </View>
            {isLoading && <View style={{ position: "absolute", alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '100%', backgroundColor: '#ffffff66' }}>
                <ActivityIndicator size="large" color="#358775" />
            </View>}
            <MessageBox message={params.infoMessage || "Use the 3:4 breathing technique in time with the music! You can go back at any time and change the breathing pace to the one that suits you the best."} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>
            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5ce0db",
        borderColor: "white",
        borderWidth: StyleSheet.hairlineWidth,
    },
    circleMin: {
        position: "absolute",
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(92,224,219,0.1)",
        transform: [{ scale: 0.2 }],
    },
    circleMax: {
        position: "absolute",
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(92,224,219,0.2)",
    },
    content: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: Math.floor(24),
        textAlign: "center",
        color: "black",
    },
    backgroundVideo: {
        flex: 1,
        width: '100%'
    },
    content: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: Math.floor(24),
        textAlign: "center",
        color: "black",
    },
    outerWrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
        paddingTop: '1%', position: 'relative',
        top: 0, left: 0, height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    transparentWrapper: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'transparent'
    },
    control: {
        backgroundColor: "#7cbd8d",
        borderRadius: 12,
        marginTop: 20,
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    innerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: 1,
    }
});



export default MusicPlayScreen;

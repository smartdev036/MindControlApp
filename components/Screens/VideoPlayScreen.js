'use strict';

import * as React from 'react';
import { useRef, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions, StyleSheet, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EntypoIcons from 'react-native-vector-icons/dist/Entypo';
import Video from 'react-native-video';
import { config } from '../../services/common.service';
import Footer from '../Common/Footer';
import MessageBox from '../Common/MessageBox';


let interval;
const VideoPlayScreen = ({ navigation, route: { params }, ...props }) => {

    const url = async () => {
        let settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "folder": "video_tracks",
                "fileName": params.video
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
    const [isLoading, setIsLoading] = React.useState(true);

    const { duration } = params;

    const playerRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [urlString, setUrlString] = useState('');

    const handleBuffer = data => {
        console.log(data)
    }

    const handlePause = () => {
        setPaused(true);
    }
    const handlePlay = () => {
        setPaused(false)
    }

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name
        })

        handleTheURL();

    }, []);


    const handleVideoLoad = data => {
        setIsLoading(false);
        console.log(data)
    }

    const handleBegining = () => {
        playerRef.current.seek(1)
        handlePlay()
    }

    const handleStopAndBack = () => {
        navigation.goBack()
    }


    const handleTheURL = async () => {
        let link = await url()
        setUrlString(link.url)
    }

    return (
        <View style={{ flex: 1 }}>

            <View
                style={styles.outerWrapper}>

                {
                    isLoading && <View style={styles.innerWrapper}><ActivityIndicator size="large" /></View>
                }
                {urlString !== '' &&
                    <Video source={{ uri: urlString }}   // Can be a URL or a local file.
                        style={styles.backgroundVideo}
                        onBuffer={handleBuffer}
                        onVideoLoad={handleVideoLoad}
                        onLoad={handleVideoLoad}
                        controls={false}
                        fullscreen={false}
                        resizeMode="cover"
                        ref={playerRef}
                        paused={paused}
                        onEnd={() => navigation.navigate('complete', params)}
                    />
                }

                {
                    !paused && <View
                        style={styles.innerWrapper}
                    >
                        <TouchableWithoutFeedback
                            style={styles.transparentWrapper}
                            onPress={handlePause}
                        >
                        </TouchableWithoutFeedback>

                    </View>

                }
                {
                    playerRef.current && paused && <View
                        style={styles.innerWrapper}
                    >
                        <View style={styles.control}>
                            <TouchableOpacity
                                onPress={handleBegining}
                            >
                                <EntypoIcons color="#fff" size={60} name="controller-jump-to-start" />

                            </TouchableOpacity>
                            <TouchableOpacity

                                onPress={handlePlay}
                            >
                                <EntypoIcons color="#fff" size={60} name="controller-play" />

                            </TouchableOpacity>
                            <TouchableOpacity

                                onPress={handleStopAndBack}
                            >
                                <EntypoIcons color="#fff" size={50} name="controller-stop" />

                            </TouchableOpacity>
                        </View>
                    </View>

                }
            </View>

            <MessageBox message={params.infoMessage || ""} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>
            <Footer showMessage={setShowMessageBox} navigation={navigation}></Footer>

        </View>
    )
}

const styles = StyleSheet.create({
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
        backgroundColor: "#3dddc4",
        borderRadius: 12,
        padding: 8, display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    innerWrapper: {
        flex: 1,
        position: 'absolute',
        height: Dimensions.get('screen').height - 210,
        width: Dimensions.get('screen').width,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        opacity: 1,
    }
});



export default VideoPlayScreen;

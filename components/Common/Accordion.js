import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Style } from '../../assests/css/_common';


const Accordion = ({ ...props }) => {

    const [expanded, setExpanded] = React.useState(false);

    return (
        <View key={props.key}>
            <TouchableOpacity style={styles.row} onPress={() => (props.onPress && props.onPress()) || setExpanded(!expanded)}>
                <View style={{ width: "100%" }}>
                    <View style={styles.childRow}>
                        <View style={{ width: 40, height: 40, borderRadius: 30, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center', ...(props.imageContainerStyle || {}) }} >
                            <Image source={props.image} style={{ width: 32, height: 32, ...(props.imageStyle || {}) }} />
                        </View>
                        <Text style={{ ...styles.title, ...Style.fontBold }}>{props.title}</Text>
                        {!props.nextPage ?
                            <Image source={expanded ? require("../../assests/images/upwards-arrow-2.png") : require("../../assests/images/downwards-arrow-2.png")} style={styles.arrow} />
                            :
                            <Image source={require("../../assests/images/arrow-right-2.png")} style={styles.arrowRight} />
                        }
                    </View>
                    {props.subTitle &&
                        <View style={{ width: "90%" }}>
                            <Text style={{ ...Style.font, ...styles.title, fontSize: 16, paddingLeft: 35, lineHeight: 24, textAlign: 'justify' }}>{props.subTitle}</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
            {
                expanded &&
                props.children
            }
            {props.noSeperator != true && <View style={styles.seperator}></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: '3%',
        color: '#3f525a',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '-10%',
        marginTop: 15,
        marginBottom: 15
    },
    childRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        width: '90%',
        // marginBottom: 5
    },
    arrow: {
        width: 18,
        height: 18,
        marginLeft: 'auto',
        marginRight: 10
    },
    arrowRight: {
        width: 18,
        height: 18,
        marginLeft: 'auto',
        marginRight: 10
    },
    seperator: {
        borderWidth: .5,
        borderColor: '#358775',
        marginHorizontal: '-10%',
    }
});

export default Accordion;

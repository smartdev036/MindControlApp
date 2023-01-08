import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    Container: {
        flex: 1,
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    BackgroundColor: { backgroundColor: '#7cbd8d' },
    ButtonsBackgroundColor: { backgroundColor: '#358775' },
    LogoBlue: { backgroundColor: '#214698' },
    InputLabel: { paddingLeft: 20, fontSize: 16, color: '#358775', fontWeight: '100' },
    InputContainer: { marginTop: 0, marginBottom: 0, borderBottomWidth: 0, marginRight: 20 },
    InputStyle: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 25,
        backgroundColor: "#FFFFFF"
    },
    font: {
        fontFamily: 'CirceRounded-Regular'
    },
    fontBold: {
        fontFamily: 'CirceRounded-Bold'
    }
})
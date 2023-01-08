'use strict';

import * as React from 'react';
import { View, ScrollView, Modal, Image } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import { WebView } from 'react-native-webview';

import { Style } from '../../assests/css/_common';
import { config, post } from '../../services/common.service';
import MessageBox from '../Common/MessageBox';

const PaymentScreen = ({ navigation, route: { params }, ...props }) => {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showMessageBoxOne, setShowMessageBoxOne] = React.useState(false);
    const [showMessageBoxTwo, setShowMessageBoxTwo] = React.useState(false);

    React.useEffect(() => {
        setEmail(params.email);
    })

    const signUp = (id) => {
        const req = { ...params, trasactionId: id };
        post(config.signupUrl, req).then(res => {
            if (res.success) {
                navigation.navigate("Sing In")
            } else {
                if (res.username) {
                    setIsError('Username already exists!')
                }
                if (res.email) {
                    setIsError('Email already exists!')
                }
            }
        })

    }


    const handleResponse = data => {
        console.log(data);
        if (data.url === config.payPalIntegration.successLink || data.title == "success") {
            const id = data.url.match(/\=(([^&]*))/g)[0].slice(1)
            setShowModal(false);
            setShowMessageBoxOne(true);
            signUp(id);
        } else if (data.url === config.payPalIntegration.errorLink || data.title == "error") {
            setShowModal(false);
            setShowMessageBoxTwo(true);
        } else if (data.url === config.payPalIntegration.webisteLink) {
            return;
        } else {
            return;
        }
    };

    const payPalScreenView = () => (
        <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
        >
            <WebView
                source={{ uri: config.payPalIntegration.webisteLink }}
                onNavigationStateChange={data =>
                    handleResponse(data)
                }
                injectedJavaScript={`document.f1.submit()`}
            />
        </Modal>
    )

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            {payPalScreenView()}
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}>
                <ScrollView contentContainerStyle={{ minWidth: '100%', marginVertical: '4%' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: '4%' }}  >
                        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#358775', justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={require('../../assests/images/contract.png')} style={{ width: 60, height: 60 }} />
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text h4 style={{ ...Style.font, color: '#3f525a' }}>PayPal Payment</Text>
                            <Text
                                style={{ ...Style.font, fontSize: 60, marginHorizontal: '20%', color: '#358775', textAlign: 'center' }}>
                                £ 9.95
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: '5%', paddingVertical: '10%', alignItems: 'center' }}>
                            <Text style={{ ...Style.font, color: '#3f525a', textAlign: 'center', fontSize: 18 }}>This app is £9.95 for a year membership.</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: '5%', marginTop: '3%' }}>
                            <Avatar
                                rounded
                                size={120}
                                overlayContainerStyle={Style.ButtonsBackgroundColor}
                                onPress={() => setShowModal(true)}
                                titleStyle={{ ...Style.font, fontSize: 22, fontWeight: 'bold' }}
                                title="Pay" />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <MessageBox message={"Thank you for your payment!"} showMessageBox={showMessageBoxOne} setShowMessageBox={setShowMessageBoxOne} />

            <MessageBox message={"Payment Unsuccessfull"} showMessageBox={showMessageBoxTwo} setShowMessageBox={setShowMessageBoxTwo} />

        </ScrollView>
    );
}

export default PaymentScreen;

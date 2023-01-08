'use strict';

import * as React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Avatar, Button, Input } from 'react-native-elements';

import { Style } from '../../assests/css/_common';
import { post, config } from '../../services/common.service';
import { Validator } from '../../services/validator';

const ForgotPassword = ({ navigation, ...props }) => {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isCodeSent, setIsCodeSent] = React.useState(false);
  const [error, setError] = React.useState('');

  const forgotPasswordRequest = () => {
    const url = config.forgotPasswordUrl;
    post(url, {
      email: email
    }).then((res) => {
      console.log(res)
      if (res.success) {
        console.log(res);
        setIsCodeSent(true);
        // navigation.navigate('Sign In');
        setError('');
      } else {
        setError('This username or email address does not match our records! please try again.')
      }
    })

  }

  const resetPassword = () => {
    if (password === confirmPassword) {
      const url = config.setPasswordUrl;
      post(url, {
        email: email,
        password: password,
        code: code
      }).then((res) => {
        console.log(res)
        if (res.success) {
          setError('');
          alert('Your password has been updated successfully, please log in.');
          navigation.navigate('Sing In');
        } else {
          setError('The Code you have entered is incorrect!')
        }
      })
    } else {
      setError('The password and Confirm Password do not match!');
    }

  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={Style.Container}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '8%', marginBottom: '5%' }}>
            <Avatar
              size={100}
              activeOpacity={0.7}
              containerStyle={{ ...Style.BackgroundColor, borderRadius: 50 }}
              overlayContainerStyle={{ margin: 15, marginLeft: 20 }}
              avatarStyle={{ width: 70, height: 70 }}
              titleStyle={{ ...Style.font }}
              source={require('../../assests/images/contract.png')}
            />
          </View>
          <View style={{ width: '100%' }}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '2%' }}>
              <Text h4 style={{ ...Style.font, color: '#3f525a' }}>Forgot your password?</Text>
              {isCodeSent ?
                <Text style={{ ...Style.font, marginHorizontal: '5%', marginTop: '3%', color: '#3f525a', textAlign: 'left' }}>Please enter the code that has been sent to your email address. Then create a new password.</Text> :
                <Text style={{ ...Style.font, marginHorizontal: '5%', marginTop: '3%', color: '#3f525a', textAlign: 'left' }}>Please enter your username or email address and a password reset code will be emailed to you.</Text>}
            </View>
            {!!error && <Text style={{ ...Style.font, marginHorizontal: '5%', marginTop: '3%', color: 'red', textAlign: 'center' }}>{error}</Text>}
            <View style={{ marginLeft: '2%', marginRight: '2%', paddingTop: '1%', alignItems: 'center' }}>
              {isCodeSent ?
                <>
                  <Input
                    label="Code"
                    labelStyle={Style.InputLabel}
                    inputStyle={Style.InputStyle}
                    value={code}
                    inputContainerStyle={Style.InputContainer}
                    containerStyle={{ margin: '1%' }}
                    onChangeText={setCode}
                  />
                  <Input
                    label="New Password"
                    labelStyle={Style.InputLabel}
                    inputStyle={Style.InputStyle}
                    value={password}
                    inputContainerStyle={Style.InputContainer}
                    containerStyle={{ margin: '1%' }}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                  <Input
                    label="Confirm Password"
                    labelStyle={Style.InputLabel}
                    inputStyle={Style.InputStyle}
                    value={confirmPassword}
                    inputContainerStyle={Style.InputContainer}
                    containerStyle={{ margin: '1%' }}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                  />
                </>
                : <>
                  <Input
                    label="Username/Email"
                    labelStyle={Style.InputLabel}
                    inputStyle={Style.InputStyle}
                    value={email}
                    inputContainerStyle={Style.InputContainer}
                    containerStyle={{ margin: '1%' }}
                    onChangeText={setEmail}
                  /></>}
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: '5%' }}>
            <Avatar
              rounded
              size={120}
              overlayContainerStyle={Style.ButtonsBackgroundColor}
              titleStyle={{ ...Style.font, fontSize: 20, fontWeight: 'bold' }}
              onPress={() => { isCodeSent ? resetPassword() : forgotPasswordRequest() }}
              title="Submit" />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;

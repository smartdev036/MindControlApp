'use strict';

import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Avatar, Input } from 'react-native-elements';

import { Style } from '../../assests/css/_common';
import { post, config } from '../../services/common.service';
import MessageBox from '../Common/MessageBox';


const SignUpScreen = ({ navigation, ...props }) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState({});
  const [isError, setIsError] = React.useState('');
  const [isNameError, setIsNameError] = React.useState('');
  const [isEmailError, setIsEmailError] = React.useState('');
  const [isPasswordError, setIsPasswordError] = React.useState('');
  const [showMessageBox, setShowMessageBox] = React.useState(false);


  const signUp = () => {
    setIsError('');
    setIsNameError('');
    setIsEmailError('');
    setIsPasswordError('');
    if (!username) {
      setError({ ...error, username: true });
    } else {
      setError({ ...error, username: false });
    }
    if (!password) {
      setError({ ...error, password: true });
    } else {
      setError({ ...error, password: false });
    }
    if (!email) {
      setError({ ...error, email: true });
    } else {
      setError({ ...error, email: false });
    }
    if (password != confirmPassword) {
      setError({ ...error, confirmPassword: true });
    } else {
      setError({ ...error, confirmPassword: false });
    }
    if (username && password && email && confirmPassword == password) {
      setError({});
      const req = {
        "username": username,
        "password": password,
        "email": email,
        "cpassword": confirmPassword
      }
      post(config.verifyUrl, req).then(res => {
        console.log(res);
        if (res.success) {
          navigation.navigate("payment", req)
          setUsername('');
          setPassword('');
          setEmail('');
          setConfirmPassword('');
        } else if (res.errors) {
          const errorArray = res.errors
          errorArray.map(object => {
            if (object.param === 'email') {
              setIsEmailError(object.msg)
            }
            if (object.param === 'password') {
              setIsPasswordError(object.msg)
            }
            if (object.param === 'username') {
              setIsNameError(isNameError => [...isNameError, object.msg])
            }
          })
        } else if (res.username) {
          setIsError('The username you are using has already been taken')
        } else if (res.email) {
          setIsError('The email address you are using is already registered with Stress Control. Please log in.')
          // setShowMessageBox(true);
        }

      })

    }
  }


  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={Style.Container}>
        <ScrollView contentContainerStyle={{ minWidth: '100%', marginVertical: '4%' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: '2%' }}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../assests/images/contract.png')} style={{ width: 60, height: 60 }} />
            </View>
          </View>
          <Text style={{ ...Style.font, color: 'red', textAlign: 'center' }}>{isError}</Text>
          <View style={{ width: '100%', marginHorizontal: '2%', alignItems: 'center' }}>
            <Input
              label={"Username"}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              value={username}
              inputContainerStyle={Style.InputContainer}
              containerStyle={{ margin: '1%' }}
              errorMessage={isNameError || error.username && 'Username is required.'}
              errorStyle={{ marginLeft: 10 }}
              onChangeText={setUsername}
            />
            <Input
              label={"Email"}
              value={email}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              inputContainerStyle={Style.InputContainer}
              containerStyle={{ margin: '1%' }}
              errorMessage={isEmailError || error.email && 'Email is required.'}
              errorStyle={{ marginLeft: 10 }}
              onChangeText={setEmail}
            />
            <Input
              label={"Password"}
              value={password}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              inputContainerStyle={Style.InputContainer}
              containerStyle={{ margin: '1%' }}
              errorMessage={isPasswordError || error.password && 'Password is required.'}
              errorStyle={{ marginLeft: 10 }}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Input
              label={"Confirm Password"}
              value={confirmPassword}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              inputContainerStyle={Style.InputContainer}
              containerStyle={{ margin: '1%' }}
              errorMessage={error.confirmPassword && 'Passwords do not match.'}
              errorStyle={{ marginLeft: 10 }}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: '15%' }}>
            <Avatar
              rounded
              size={120}
              overlayContainerStyle={Style.ButtonsBackgroundColor}
              titleStyle={{ ...Style.font, fontSize: 22, fontWeight: 'bold' }}
              onPress={() => signUp()}
              title="Next" />
          </View>
        </ScrollView>
        <MessageBox message={isError} showMessageBox={showMessageBox} setShowMessageBox={setShowMessageBox} ></MessageBox>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;

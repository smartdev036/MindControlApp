'use strict';

import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfoModule from 'react-native-device-info';
import { AuthContext, post, config } from '../../services/common.service';

import { Style } from '../../assests/css/_common';
import { Validator } from '../../services/validator';

const SignInScreen = ({ navigation, ...props }) => {

  const { signIn } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isUsernameError, setIsUsernameError] = React.useState(false);
  const [isError, setIsError] = React.useState('');
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isPasswordMessage, setIsPasswordMessage] = React.useState('');
  const [mobileActive, setMobileActive] = React.useState(true);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validationCredentials = async () => {
    // signIn({ username, password, token: String(Math.random()) });
    setIsSubmitted(true);
    setIsPasswordMessage('');
    let deviceId = await DeviceInfoModule.getUniqueId()
    const formdata = {
      username: username,
      password: password,
      deviceId: deviceId
    }
    post(config.loginUrl, formdata)
      .then(res => {
        const token = res.success || res.token;
        console.log(res);
        setIsSubmitted(false);
        if (token) {
          signIn({ username, password, token: String(Math.random()) });
        } else if (res.errors) {
          const errorArray = res.errors
          errorArray.map(object => {
            if (object.param === 'password') {
              setIsPasswordMessage(object.msg)
            }
          })
        } else {
          setIsError(res.message);

        }
      }).catch(err => {
        setIsError(err.message);
        console.log(err.message);
        setIsSubmitted(false);
      })
  }

  const login = () => {
    if (username && password) {
      validationCredentials();
    } else {
      if (!password) {
        setIsPasswordError(true)
      }
      if (!username) {
        setIsUsernameError(true)
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={Style.Container}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '5%' }}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#7cbd8d', justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../assests/images/login.png')} style={{ width: 80, height: 80 }} />
            </View>
          </View>
          <View style={{ width: '100%', marginHorizontal: '2%', alignItems: 'center' }}>
            {!!isError && <Text style={{ color: 'red', marginRight: '5%' }}>{isError}</Text>}
            <Input
              label={"Enter your username or email address"}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              value={username}
              errorMessage={isUsernameError && !Validator.required(username) ? 'Username/Email is required' : ''}
              containerStyle={{ margin: '1%' }}
              errorStyle={{ marginLeft: 10 }}
              inputContainerStyle={Style.InputContainer}
              onBlur={() => {
                const err = !Validator.required(username);
                setIsUsernameError(err || isUsernameError);
              }}
              onChangeText={setUsername}
            />
            <Input
              label={"Enter your password"}
              value={password}
              labelStyle={Style.InputLabel}
              inputStyle={Style.InputStyle}
              errorMessage={isPasswordMessage || (isPasswordError && !Validator.required(password) ? 'Password is required' : '')}
              errorStyle={{ marginLeft: 10 }}
              inputContainerStyle={Style.InputContainer}
              containerStyle={{ margin: '1%' }}
              onChangeText={setPassword}
              onBlur={() => {
                const err = !Validator.required(password);
                setIsPasswordError(err || isPasswordError);
              }}
              secureTextEntry
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3f525a' }}>Forgot your password?  </Text>
            <Text
              style={{ fontSize: 14, fontWeight: '300', color: '#358775', borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#358775' }}
              onPress={() => navigation.navigate('forgotPassword')}>Click Here</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3f525a' }}>Not yet {mobileActive ? 'registered' : 'user'}?  </Text>
            <Text
              style={{ fontSize: 14, fontWeight: '300', color: '#358775', borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#358775' }}
              onPress={() => navigation.navigate('Sign Up')}>Register Here</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <Button
              onPress={() => !isSubmitted && login()}
              icon={
                <Icon
                  name="arrow-right"
                  size={20}
                  color="white"
                  style={{ paddingLeft: 15 }}
                />
              }
              iconRight
              title="Submit"
              loading={isSubmitted}
              buttonStyle={{ ...Style.font, width: 250, height: 60, backgroundColor: '#358775', display: 'flex', justifyContent: 'center', borderRadius: 30 }}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const customStyle = StyleSheet.create({
  mobileActive: {
    borderTopWidth: 1,
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRightWidth: 1,
    borderTopRightRadius: 50,
    borderColor: '#358775',
    paddingTop: 4,
    borderBottomRightRadius: 25,
    ...Style.font
  },
  enhancedInactive: {
    minWidth: '50%',
    borderColor: '#358775',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    paddingBottom: 4,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 25,
    ...Style.font
  },
  mobileInactive: {
    borderBottomWidth: 1,
    paddingBottom: 4,
    borderRightWidth: 1,
    borderBottomRightRadius: 50,
    borderColor: '#358775',
    minWidth: '50%',
    ...Style.font,
    borderTopRightRadius: 25
  },
  enhancedActive: {
    minWidth: '50%',
    borderColor: '#358775',
    borderTopWidth: 1,
    paddingTop: 4,
    borderLeftWidth: 1,
    borderTopLeftRadius: 50,
    ...Style.font,
    borderBottomLeftRadius: 25
  },
  activeButton: {
    color: '#358775', fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    ...Style.font,
    padding: 10
  },
  inactiveButton: {
    color: '#cacaca', fontWeight: '200',
    width: '100%',
    textAlign: 'center',
    ...Style.font,
    padding: 10
  }
})

export default SignInScreen;

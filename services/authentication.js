import * as React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../components/AuthenicationScreens/SignInScreen';
import ForgotPassword from '../components/AuthenicationScreens/ForgotPasswordScreen';
import SignUpScreen from '../components/AuthenicationScreens/SignUpScreen';
import PaymentScreen from '../components/AuthenicationScreens/PaymentScreen';
import AppInfo from '../components/AuthenicationScreens/AppInfo';

const Stack = createStackNavigator();


const AuthenticationStack = () => {
  return (
    <Stack.Navigator initialRouteName={'info'} screenOptions={{
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 25,
        alignContent: 'center'
      },
      headerMode: "float",
      headerTitleAlign: 'center',
      headerBackImage: (_r) => <Icon name='arrow-circle-left' type='font-awesome' color='white' />,
      headerStyle: { backgroundColor: '#358775', height: 70 },
    }}>
      <Stack.Screen name="info" component={AppInfo} options={{ title: 'Introduction', headerLeft: null, headerShown: false }} />
      <Stack.Screen name="Sing In" component={SignInScreen} options={{ title: 'Log In', headerLeft: null }} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ title: 'Register' }} />
      <Stack.Screen name="payment" component={PaymentScreen} options={{ title: 'Payment' }} />
    </Stack.Navigator>
  )
}

export default AuthenticationStack;

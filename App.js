import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './services/authentication';
import UserStack from './services/user';
import SplashScreenStack from './components/AuthenicationScreens/SplashScreen';

import { AuthContext } from './services/common.service';

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'INITIAL_LOADING':
          return {
            ...prevState,
            initialLoading: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      initialLoading: false
    }
  );

  React.useEffect(() => {
    SplashScreen.hide();
    const bootstrapAsync = async () => {
      let userToken;
      let intialLoading;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        intialLoading = await AsyncStorage.getItem('intialLoading');
        await AsyncStorage.setItem('intialLoading', 'appOpened');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'INITIAL_LOADING', token: intialLoading });
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        AsyncStorage.setItem("userToken", data.token);
        AsyncStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: 'SIGN_IN', token: data.token });
      },
      signOut: () => {
        const removeToken = async () => {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("user");
          dispatch({ type: 'SIGN_OUT' });
        }
        removeToken();
      },
      signUp: async data => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );


  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.isLoading ?
            <SplashScreenStack /> :
            state.userToken == null ?
              <AuthenticationStack initialLoading={state.initialLoading} /> : <UserStack />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
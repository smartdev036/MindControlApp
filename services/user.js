import * as React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../components/Screens/CategoriesScreen';
import DetailScreen from '../components/Screens/DetailScreen';
import MusicSettingScreen from '../components/Screens/MusicSettingScreen';
import MusicPlayScreen from '../components/Screens/MusicPlayScreen';
import CompletionScreen from '../components/Screens/CompletionScreen';
import VideoPlayScreen from '../components/Screens/VideoPlayScreen';

const Stack = createStackNavigator();


const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName={'categories'} screenOptions={{
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
            <Stack.Screen name="categories" component={CategoriesScreen} options={{ title: 'Stress Control' }} />
            <Stack.Screen name="categoryDetail" component={DetailScreen} options={{ title: '' }} />
            <Stack.Screen name="musicSetting" component={MusicSettingScreen} options={{ title: '' }} />
            <Stack.Screen name="musicPlay" component={MusicPlayScreen} options={{ title: '' }} />
            <Stack.Screen name="videoPlay" component={VideoPlayScreen} options={{ title: '' }} />
            <Stack.Screen name="complete" component={CompletionScreen} options={{ title: '' }} />
        </Stack.Navigator>
    )
}

export default UserStack;
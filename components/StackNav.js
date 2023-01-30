import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../screens/ForgetPassword';
import BottomNav from './BottomBar';
import BackButton from './BackButton';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNav( navigation, Screen ) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}



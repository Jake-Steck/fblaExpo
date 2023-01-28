import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../screens/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomBar';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "BottomNav" component={BottomNav} options ={{ headerShown: false}} />
            <Stack.Screen name = "ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../screens/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

export default function BottomNav( Screen ) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} /> }} />
            <Tab.Screen name="Profile" component={SignIn} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} /> }} />
        </Tab.Navigator>
    );
}



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={SignIn} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}


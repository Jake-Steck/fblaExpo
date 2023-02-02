import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const Tab = createBottomTabNavigator();



export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#153716',
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 60,
                    position: 'absolute',
                    borderRadius: 20,
                    marginHorizontal: 20,
                    bottom: 20,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={30}
                    />
                }} />

            <Tab.Screen
                name="Profile"
                component={SignIn}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={30} />
                }} />
        </ Tab.Navigator>
    );
}



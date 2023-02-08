import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Calendar from '../screens/Calendar';
import Attendance from '../screens/Attendance';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();



export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
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
                    headerShown: false, tabBarIcon: ({ color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: '40%' }}>
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={30}
                            />
                        </View>
                }} />

            <Tab.Screen
                name="Attendance"
                component={Attendance}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: '40%' }}>
                            <Ionicons
                                name="md-clipboard-outline"
                                color={color}
                                size={30}
                            />
                        </View>
                }} />



            <Tab.Screen
                name="LHS Calendar"
                component={Calendar}
                options={{
                    headerShown: true,
                    headerBackground: () => (
                        <View style={{ backgroundColor: '#64DA93', height: 100 }} />
                    ),

                    headerTitleStyle: {
                        color: '#3D3D3D',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        alignSelf: 'center',
                        flex: 1,
                        fontFamily: 'OpenSans_700Bold',
                    },
                    headerTintColor: '#fff',
                    tabBarIcon: ({ color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: '40%' }}>
                            <Ionicons
                                name="calendar-outline"
                                color={color}
                                size={30} />
                        </View>
                }} />

            <Tab.Screen
                name="Profile"
                component={SignIn}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: '40%' }}>
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={30} />
                        </View>
                }} />


        </ Tab.Navigator>
    );
}



import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Calendar from '../screens/Calendar';
import Attendance from '../screens/Attendance';
import Attenance2 from '../screens/Attendance2';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../screens/ForgetPassword';
import BottomNav from './BottomBar';
import BottomNavProfile from './BottomBarProfile';
import Profile from '../screens/Profile';
import { getAuth } from "firebase/auth";

const Stack = createStackNavigator();

export default function LoggedInNav() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNav" component={BottomNavProfile} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: true }} />
            <Stack.Screen name="Attendance" component={Attenance2} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



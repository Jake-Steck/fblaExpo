import React from 'react';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Calendar from '../screens/Calendar';
import Attendance from '../screens/Attendance';
import Attenance2 from '../screens/Attendance2';
import ProfileS from '../screens/ProfileS';
import ProfileT from '../screens/ProfileT';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../screens/ForgetPassword';
import BottomNav from './BottomBar';
import ViewAttendance from '../screens/ViewAttendance';
import PhotoShare from '../screens/PhotoShare';
import Profile from '../screens/ProfileS';
import ViewPhotos from '../screens/ViewPhotos';
import ReportBug from '../screens/ReportBug';

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: true }} />
            <Stack.Screen name="Attendance" component={Attenance2} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="StudentProf" component={ProfileS} options={{ headerShown: false }} />
            <Stack.Screen name="TeacherProf" component={ProfileT} options={{ headerShown: false }} />
            <Stack.Screen name="ViewAttendance" component={ViewAttendance} options={{ headerShown: false }} />
            <Stack.Screen name="PhotoShare" component={PhotoShare} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileS" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="ViewPhotos" component={ViewPhotos} options={{ headerShown: false }} />
            <Stack.Screen name="ReportBug" component={ReportBug} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



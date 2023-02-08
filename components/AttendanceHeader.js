import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';


export default function SignInHeader() {
    return (
        <>
            <Image source={require('../assets/imgs/Aheader.png')} style={{ position: 'absolute', width: '100%', height: '20%', marginTop: -20 }} />
            <Text style={{ fontFamily: 'OpenSans_700Bold', position: 'absolute', marginTop: '50%', marginLeft: '5%', fontSize: '29rem', color: '#3D3D3D' }}>LHS Attendance</Text>
        </>
    )
}
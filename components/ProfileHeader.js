import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ProfileHeader() {

    const navigation = useNavigation();
    return (
        <>

            <Image source={require('../assets/imgs/signin.png')} style={{ position: 'sticky', width: '100%', height: 384, marginTop: -20 }} />
            <Text style={{ fontFamily: 'OpenSans_700Bold', position: 'absolute', textAlign: 'center', alignSelf: 'center', marginTop: '90%', fontSize: '29rem', color: '#3D3D3D' }}>Profile</Text>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" style={{ position: 'absolute', marginTop: '15%', marginLeft: '5%' }} onPress={() => navigation.goBack()} />
        </>
    )
}
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import HomeHeader from '../components/HomeHeader';
import ImpEvents from '../components/ImpEvents';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Profile({ navigation }) {
    
    return (
        <>
            <View style={tw`flex-1 bg-white`}>
                <SignInHeader />
                <View style={tw`flex-1 items-center justify-center`}>
                    <Text style={tw`text-2xl font-bold`}>Profile</Text>
                </View>
            </View>
        </>
    );
}
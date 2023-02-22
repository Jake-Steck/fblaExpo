import { StyleSheet, Text, View, Button, TextInput, Pressable, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import {Image} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import tw from 'tailwind-react-native-classnames';
import { User } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function Profile({ navigation }) {

    let SignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.")
            navigation.replace("SignIn")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const handleSchoology = () => {
        Linking.openURL('https://livingston.schoology.com/');
    }

    const handleGenesis = () => {
        Linking.openURL('https://students.livingston.org/');
    }


    return (
        <View style={styles.container}>
            <Image source={require('../assets/imgs/header.png')} style={tw`absolute w-full top-0 h-96 z-0 `} />
            <Text style={{ fontFamily: 'OpenSans_700Bold', position: 'absolute', top: 100, fontSize: 30, color: '#3D3D3D' }}>Student Profile</Text>
            <View style = {{ backgroundColor: '#F3F3F3', width: 150, height: 150, borderRadius: 100, shadowColor: 'black', shadowOpacity: 1, shadowOffset: 20, top: 85 }}>
                <MaterialCommunityIcons name="account" size={150} style = {{ color: "#75D29B", alignSelf: 'center', bottom: 7 }}/>
            </View>
            <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, right: 75, top: 95 }}>
                <View>
                    <Pressable onPress={ handleSchoology } style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <Image source={require('../assets/imgs/schoology.png')} style={{ width: 60, height: 60, left: 50 }}></Image>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 30, color: '#3D3D3D', left: 130, bottom: 50 }}>Schoology</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={ handleGenesis } style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <Image source={require('../assets/imgs/genesis.png')} style={{ width: 65, height: 65, left: 50}}></Image>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 30, color: '#3D3D3D', left: 130, bottom: 50 }}>Genesis</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <MaterialCommunityIcons name="share" size={65} style={{ color: "#75D29B", alignSelf: 'center' }}/>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 30, color: '#3D3D3D', left: 130, bottom: 50 }}>Share Photo</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={SignOut} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <MaterialCommunityIcons name="logout" size={65} style={{ color: "#75D29B", alignSelf: 'center' }}/>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 30, color: '#3D3D3D', left: 130, bottom: 50 }}>Log Out</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

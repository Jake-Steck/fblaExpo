import { StyleSheet, Text, View, Button, TextInput, Pressable, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { Image } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import tw from 'tailwind-react-native-classnames';
import { User } from 'firebase/auth';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    let handleAttendance = () => {
        navigation.push("ViewAttendance")
    }


    let SignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.")
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

    const [temp, setTemp] = useState();
    var key = "f908c935c047b03ebb81e5e19bb32147";
    var zip = "07039";
    var country = "us"
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            setTemp(Math.round(data.main.temp))
        })


    return (
        <View style={styles.container}>
            <Image source={require('../assets/imgs/Aheader.png')} style={{ width: '100%', height: '50%', top: '-7%' }} />

            <Text style={{ fontFamily: 'OpenSans_700Bold', position: 'absolute', top: "12%", left: '10%', fontSize: 30, color: '#3D3D3D' }}>Teacher Profile</Text>

            <Image source={require('../assets/imgs/marker.png')} style={tw`absolute top-40 left-10 w-6 h-6`} />
            <Text style={{ fontFamily: 'OpenSans_300Light', position: 'absolute', top: 156, left: 70, fontSize: 20, color: '#3D3D3D' }}>Livingston High School</Text>
            <Image source={require('../assets/imgs/sun.png')} style={tw`absolute top-48 left-10 w-6 h-6`} />
            <Text style={{ fontFamily: 'OpenSans_300Light', position: 'absolute', top: 192, left: 70, fontSize: 20, color: '#3D3D3D' }}>{temp}°F</Text>

            <View style={{ backgroundColor: '#F3F3F3', width: 130, height: 130, borderRadius: 100, shadowColor: 'black', shadowOpacity: 1, shadowOffset: 20, top: "-15%" }}>
                <MaterialCommunityIcons name="account" size={120} style={{ color: "#75D29B", alignSelf: 'center' }} />
            </View>


            <View style={{ justifyContent: 'space-evenly', paddingHorizontal: 10, top: '-10%', }}>
                <View>
                    <Pressable onPress={handleSchoology} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <Image source={require('../assets/imgs/schoology.png')} style={{ width: 45, height: 45 }}></Image>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 25, color: '#3D3D3D', left: '20%', bottom: 45 }}>Schoology</Text>
                    </Pressable>
                </View>

                <View style={{ height: 2, backgroundColor: 'lightgrey', bottom: 15, width: 350 }} />

                <View>
                    <Pressable onPress={handleGenesis} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <Image source={require('../assets/imgs/genesis.png')} style={{ width: 50, height: 50 }}></Image>
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 25, color: '#3D3D3D', left: '20%', bottom: 45 }}>Genesis</Text>
                    </Pressable>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'lightgrey', bottom: 15, }} />

                <View>
                    <Pressable style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <MaterialCommunityIcons name="share" size={55} style={{ color: "#75D29B", }} />
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 25, color: '#3D3D3D', left: '20%', bottom: 45 }}>Share Photo</Text>
                    </Pressable>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'lightgrey', bottom: 15, }} />

                <View>
                    <Pressable onPress={handleAttendance} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>

                        <MaterialCommunityIcons name="account-check" size={55} style={{ color: "#75D29B" }} />
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 25, color: '#3D3D3D', left: '20%', bottom: 45 }}>View Attendance</Text>
                    </Pressable>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'lightgrey', bottom: 15, }} />

                <View>
                    <Pressable onPress={SignOut} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }
                    ]}>
                        <MaterialCommunityIcons name="logout" size={55} style={{ color: "#75D29B" }} />
                        <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 25, color: '#3D3D3D', left: '20%', bottom: 45 }}>Log Out</Text>
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
        fontWeight: 'bold',
    },
});

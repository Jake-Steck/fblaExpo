import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpHeader from '../components/SignUpHeader';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { auth } from "../firebaseConfig";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Home");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage);
            }
            )
    };

    return (
        <>
            <SignUpHeader />
            <View style={{ flex: 1, alignItems: 'center', marginTop: '30%', paddingTop: 10 }}>
                <View style={styles.searchSection}>
                    <Ionicons name="mail-outline" size={20} color="black" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
                <View style={{ padding: 25 }}>
                    <View style={styles.searchSection}>
                        <Feather name="lock" size={20} color="black" style={styles.searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <Pressable onPress={signUp} style={{ backgroundColor: "#6DC590", height: 45, width: 360, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 50 }}>
                    <Text style={{ fontFamily: "OpenSans_600SemiBold", fontSize: 20, color: 'white' }}>Register</Text>
                </Pressable>
                {/* <TextInput
                    style={tw`pl-4 h-12 w-80 rounded-xl bg-white`}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <View style={{ padding: 25 }}>
                    <TextInput
                        style={tw`mt-4 pl-4 h-12 w-80   rounded-xl bg-white`} placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                    <Button title="Register" onPress={signUp} />
                </View> */}
            </View >
        </>
    );
}



const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 360,
        height: 45,
        borderBottomColor: '#64DA93',
        borderBottomWidth: 2,
    },
    searchIcon: {
        padding: 1,

    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
});


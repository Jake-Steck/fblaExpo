import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SignInHeader from '../components/SignInHeader';


export default function SignIn({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                switch (errorCode) {
                    case "auth/invalid-email":
                        alert("Please Enter a valid email address or sign up for an account");
                        break;
                    case "auth/user-not-found":
                        alert("User not found");
                        break;
                    case "auth/wrong-password":
                        alert("Incorrect Password. Try again.");
                        break;
                    case "auth/internal-error":
                        alert("Please enter a valid password");
                        break;
                }
            });
    }


    return (
        <>
            <SignInHeader />
            <View style={{ alignItems: 'center', marginTop: '25%', paddingTop: 10 }}>
                <View style={styles.searchSection}>
                    <Ionicons name="mail-outline" size={20} color="black" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                        clearButtonMode="always"

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
                            clearButtonMode="always"
                        />
                    </View>
                </View>
                <Pressable style={{ marginLeft: '55%', marginTop: -10 }} onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={{ color: '#cdcdcd' }}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={signIn} style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#34AE65'
                            : '#64DA93'
                    },
                    styles.notPressed,
                ]}>
                    <Text style={{ fontFamily: "OpenSans_600SemiBold", fontSize: 20, color: 'white' }}>Log In</Text>
                </Pressable>


                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ height: '20%', color: '#cdcdcd', marginTop: 10 }}>Don't have and account?<Text style={{ color: 'grey' }}> Sign Up</Text></Text>
                </Pressable>

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
    notPressed: {
        height: 45,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    }
});


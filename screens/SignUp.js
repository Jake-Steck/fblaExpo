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
                console.log(user.email);
                const email = user.email;
                navigation.navigate("Profile");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        alert("Email already in use");
                        break;
                    case "auth/invalid-email":
                        alert("Please Enter a valid email address");
                        break;
                    case "auth/internal-error":
                        alert("Please enter a valid password");
                        break;
                    case "auth/weak-password":
                        alert("Please enter a stronger password (6 or more characters)");
                        break;
                }
            });
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
                <Pressable onPress={signUp} style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#34AE65'
                            : '#64DA93'
                    },
                    styles.notPressed
                ]}>
                    <Text style={{ fontFamily: "OpenSans_600SemiBold", fontSize: 20, color: 'white' }}>Register</Text>
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
        marginTop: 50
    }
});


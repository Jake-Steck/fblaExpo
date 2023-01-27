import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
                alert(errorMessage);
            });
    }

    return (
        <View>
            <Button title="Sign In" onPress={signIn} />
            <TextInput
                style={tw`pl-4 h-12 w-80 border-black border-2 rounded-xl`}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={tw`mt-4 pl-4 h-12 w-80 border-black  border-2 rounded-xl`} placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Second" onPress={() => navigation.navigate('Home')} />


        </View>
    );
}
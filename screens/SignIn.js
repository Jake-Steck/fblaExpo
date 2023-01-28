import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
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
            });
    }

    let Register = () => {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={tw`pl-4 h-12 w-80 rounded-xl bg-white`}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={tw`mt-4 pl-4 h-12 w-80 rounded-xl bg-white`} placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Sign In" onPress={signIn} />
            <Button title="Register" onPress={Register} />
            <Button title="Forgot Password" onPress={() => navigation.navigate("ResetPassword")} />


        </View >
    );
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F3F3F3',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

import SignInHeader from '../components/SignInHeader';


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



    return (
        <>
            <SignInHeader />
            <View style={{ flex: 1, alignItems: 'center', marginTop: '30%', paddingTop: 10 }}>
                <TextInput
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
                    <Button title="Sign In" onPress={signIn} />
                    <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
                </View>
            </View >
        </>
    );
}
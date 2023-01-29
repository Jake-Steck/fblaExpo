import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpHeader from '../components/SignUpHeader';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { auth } from "../firebaseConfig";


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
                    <Button title="Register" onPress={signUp} />
                </View>
            </View >
        </>
    );
}

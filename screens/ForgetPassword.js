import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "../components/BottomBar";


const Stack = createStackNavigator();

export default function ResetPassword({ navigation }) {

    const auth = getAuth();
    const [email, setEmail] = useState("");

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                navigation.navigate('Profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    function BottomNav() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={SignIn} options={{ headerShown: false }} />
            </Tab.Navigator>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', BottomNav}}>
            <TextInput
                style={tw`pl-4 h-12 w-80 rounded-xl bg-white`}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <Button title="Reset Password" onPress={handleResetPassword} />

        </View >
    );
}
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from "@react-navigation/stack";
import ForgetPasswordHeader from '../components/ForgotPasswordHeader';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

export default function ResetPassword({ navigation }) {

    const auth = getAuth();
    const [email, setEmail] = useState("");

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent. Please check your inbox.');
                navigation.navigate('Profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (errorCode) {
                    case 'auth/invalid-email':
                        alert('The Email Adress that was entered was not found/invalid. Please try again.');
                        break;
                    case 'auth/user-not-found':
                        alert('User not found.');
                        break;
                    case 'auth/missing-email':
                        alert('Please enter your email address.');
                        break;
                }
            });

    };

    return (
        <>
            <ForgetPasswordHeader />
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
                <Pressable onPress={handleResetPassword} style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#34AE65'
                            : '#6DC590'
                    },
                    styles.notPressed
                ]}>
                    <Text style={{ fontFamily: "OpenSans_600SemiBold", fontSize: 20, color: 'white' }}>Reset Password</Text>
                </Pressable>
            </View>

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


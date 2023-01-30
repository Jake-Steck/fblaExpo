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
                navigation.navigate('Profile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                    />
                </View>
                <Pressable onPress={() => handleResetPassword} style={{ backgroundColor: "#6DC590", height: 45, width: 360, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 50 }}>
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
});


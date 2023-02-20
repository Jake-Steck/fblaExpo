import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';




export default function Profile({ navigation }) {

    let SignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.")
            navigation.replace("SignIn")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Student Profile</Text>
            <Button title="Sign Out" onPress={SignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

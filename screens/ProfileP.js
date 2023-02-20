import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';


export default function Profile({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Parent Profile</Text>
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

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import CalHeader from '../components/CalHeader';

export default function Calendar({ navigation }) {
    return (
        <View style={{ backgroundColor: "#F3F3F3" }}>
            <CalHeader />
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text>Calendar</Text>
            </View>
        </View>
    )
}

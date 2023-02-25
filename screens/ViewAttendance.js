import React, { useState, useEffect } from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component, Pressable, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; import { Ionicons } from '@expo/vector-icons';
import { db, auth } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';



export default function Attenance() {

    const [email, setEmail] = useState("");

    const getAttendance = () => {
        db.collection("attendance").doc(email).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    console.log(db);
    const navigation = useNavigation();
    return (
        <>
            <Attendance />
            <View>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" style={{ position: 'absolute', marginTop: '15%', marginLeft: '5%' }} onPress={() => navigation.goBack()} />

                <Text style={styles.text}>View Attendance</Text>
                <View style={{ alignItems: 'center', marginTop: '25%', paddingTop: 10 }}>
                    <View style={styles.searchSection}>
                        <Ionicons name="mail-outline" size={20} color="black" style={styles.searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: '25%', paddingTop: 10 }}>
                    <Pressable style={styles.button} onPress={getAttendance}>
                        <Text style={styles.buttonText}>View Attendance</Text>
                    </Pressable>
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '42%',
        left: '10%',
        color: '#3D3D3D'
    },
});


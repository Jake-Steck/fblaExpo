import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Linking, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useRef } from 'react';
import { Button } from 'react-native-paper';
import { app } from '../firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import AttendanceHeader from '../components/AttendanceHeader';




export default function ReportBug({ closeModal }) {
    const [bugReport, setBugReport] = useState('');
    const db = getFirestore(app);
    console.log(db);
    const handleSubmit = async () => {
        addDoc(collection(db, 'bugReports'), {
            bugReport: bugReport,
            timestamp: new Date().toLocaleString()
        }).then(() => {
            alert('Bug report submitted!');
        }
        ).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
            <AttendanceHeader />
            <Button
                icon="close"
                mode="contained"
                style={{ backgroundColor: '#3D3D3D', position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
                onPress={closeModal}>
                Close
            </Button>

            <View style={{ marginTop: 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Report a Bug</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Please describe the bug below:</Text>
                <TextInput
                    style={{ height: 200, width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 20, borderRadius: 10, padding: 10 }}
                    onChangeText={text => setBugReport(text)}
                    value={bugReport}
                    multiline={true}
                    numberOfLines={4}
                />
                <Button
                    icon="send"
                    mode="contained"
                    style={{ backgroundColor: '#3D3D3D', marginTop: 20 }}
                    onPress={handleSubmit}>
                    Send
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pressed: {
        backgroundColor: 'grey',
    },
    notPressed: {
        backgroundColor: 'white',
    },
});

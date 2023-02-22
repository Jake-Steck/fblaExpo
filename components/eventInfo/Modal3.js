import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

function linkToACT() {
    const url = 'https://my.act.org/account/signin?location=https://my.act.org';
    Linking.openURL(url);
}

function linkToSAT() {
    const url = 'https://satsuite.collegeboard.org/sat/registration';
    Linking.openURL(url);
}

function linkToPacket() {
    const url = 'https://drive.google.com/file/d/1Yg1Q1KS1YBq0pZSdabjIo1rm0to00ixN/view';
    Linking.openURL(url);
}

export default function ModalContent1({ closeModal }) {





    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>

            <Image
                style={{ height: '50%', width: '100%', opacity: 0.7 }}
                source={require('../../assets/imgs/info/test.jpeg')}
            />

            <Button
                icon="close"
                mode="contained"
                style={{ backgroundColor: '#3D3D3D', position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
                onPress={closeModal}>
                Close
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ACT Location: Livingston High School</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ACT Date: April 15, 2023</Text>
                </View>

            </View>
            <Button style={{ marginTop: 10, width: '100%', alignSelf: 'center', backgroundColor: '#3D3D3D' }} onPress={linkToACT} mode="contained">ACT Registration</Button>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Location: Livingston High School</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Date: June 3, 2023</Text>
                </View>
            </View>
            <Button style={{ marginTop: 10, width: '100%', alignSelf: 'center', backgroundColor: '#3D3D3D' }} onPress={linkToSAT} mode="contained">SAT Registration</Button>
            <Button style={{ marginTop: 40, width: '100%', alignSelf: 'center', backgroundColor: '#3D3D3D' }} onPress={linkToPacket} mode="contained">View Info. Packet</Button>
        </View >
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
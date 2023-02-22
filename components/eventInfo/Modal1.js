import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

function linkToApps() {
    const url = 'https://www.livingston.org/cms/lib/NJ01000562/Centricity/ModuleInstance/3016/FINAL%202023%202024%20Scheduling%20Information%20AP%20Honors%20and%20Elective%20Applications.pdf';
    Linking.openURL(url);
}

function linkToPacket() {
    const url = 'https://www.livingston.org/cms/lib/NJ01000562/Centricity/Domain/846/Course%20Guide%202023-2024%20-%20Master%20Copy%20FINAL.pdf';
    Linking.openURL(url);
}

export default function ModalContent1({ closeModal }) {



    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
            <Image
                style={{ height: '50%', width: '100%', opacity: 0.7 }}
                source={require('../../assets/imgs/info/mod1.jpg')}
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Type: Scheduling</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Concerning: 2023-2024 School Year</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Grades: 9-11</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Meeting Date: Check your Email</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Note: Some Classes Require an Application</Text>
                    </View>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Additional: If you are interested in taking a class that requires an application, please check your email for the link to the applications (or the button below). If you have any questions, please contact your guidance counselor.</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Classes Offered: Click the "Courses" button below to view all classes offered at LHS!</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 80, marginTop: 20, marginBottom: 20 }}>
                <Button style={{ backgroundColor: '#3D3D3D', marginRight: 10 }} onPress={linkToApps} mode="contained">Applications</Button>
                <Button style={{ backgroundColor: '#3D3D3D', marginRight: 10, width: '110%' }} onPress={linkToPacket} mode="contained">Courses</Button>
            </View>


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
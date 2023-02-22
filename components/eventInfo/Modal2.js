import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';



function linkToPacket() {
    const url = 'https://www.livingston.org/cms/lib/NJ01000562/Centricity/ModuleInstance/3016/LHS%20Schedule%20Change%20Form%202022-2023%20-%20Semester%202.pdf';
    Linking.openURL(url);
}

export default function ModalContent1({ closeModal }) {



    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
            <Image
                style={{ height: '50%', width: '100%', opacity: 0.7 }}
                source={require('../../assets/imgs/info/change.jpg')}
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Type: Scheduling (Semester 2)</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Concerning: Semester 2 Students</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Grades: 9-12</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Window 1: 1/27/23 to 2/2/23</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Window 2: 3/2/23 to 3/7/23</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Window 3: 3/27/23 to 3/31/23</Text>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Note: You can only drop Semster Length Electives</Text>
                    </View>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Additional: You are only able to switch to another S2 Course during Window 1, and if it has available seats. For Window 2 + 3, you can only drop to Study Hall. No markings on your trasncript.</Text>
                </View>
            </View>

            <Button style={{ backgroundColor: '#3D3D3D', width: '40%', marginLeft: '28%', marginTop: '10%' }} onPress={linkToPacket} mode="contained">More Information</Button>





        </View >
    );
}
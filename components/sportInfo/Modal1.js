import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useRef } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';



export default function ModalContent1({ closeModal }) {


    function directions() {
        const address = 'Richard J. Codey Arena, 560 Northfield Ave, West Orange, NJ 07052';
        const url = `http://maps.apple.com/?daddr=${encodeURIComponent(address)}`;
        Linking.openURL(url);
    }


    let location = {
        latitude: 40.769200,
        longitude: -74.280870,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    return (
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>

            <MapView
                style={{ height: '50%', width: '100%' }}
                initialRegion={{
                    latitude: 40.769200,
                    longitude: -74.280870,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}
                showsUserLocation={true}
            >
                <Marker
                    coordinate={location}
                    title="Codey Arena"
                    showsUserLocation={true}
                >
                    <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 20, borderColor: 'grey', borderWidth: 5 }} />
                </Marker>
            </MapView>

            <Button
                icon="close"
                mode="contained"
                style={{ backgroundColor: '#3D3D3D', position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
                onPress={closeModal}>
                Close
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Location: Codey Arena at South Mountain</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Sport: Hockey</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Against: Governor Livingston</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Date: March 8, 2023</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Time: 7:00 PM</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingLeft: 40, paddingRight: 40 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tickets: Available Upon Entry</Text>
                    </View>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Price: Students - $2 | Other - $3</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Payment: Cash/Card</Text>
                </View>
            </View>
            <Button style={{ marginTop: 50, width: '100%', alignSelf: 'center', backgroundColor: '#3D3D3D' }} onPress={directions} mode="contained">Directions</Button>

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
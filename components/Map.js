import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function Map() {

    const [modalVisibleMap, setModalVisibleMap] = useState(false);

    return (
        <>
        <Modal
            animationType="slide"
            presentationStyle='pageSheet'
            visible={modalVisibleMap}
            onRequestClose={() => {
                setModalVisibleMap(!modalVisibleMap);
            }}>
            <View style={{ position: 'absolute', backgroundColor: 'grey', top: 10, alignContent: 'center', height: 5, width: '10%', alignSelf: 'center', borderRadius: 10 }}>
            </View>
        </Modal>

        <View style = {{ height: 10, marginLeft: "10%" , marginTop: "5%" }}>
            <Pressable style = {({ pressed }) => [{opacity: pressed ? 0.5: 1, backgroundColor: "rgb(255, 255, 255)", borderWidth: 3, borderColor: "#3D3D3D" , borderRadius: 10, position: 'absolute', textAlign: 'center', alignSelf: 'left' }]} onPress={() => {
                setModalVisibleMap(true)
            }} >
                <MaterialCommunityIcons name="map-search" size={65} style = {{ color: "#3D3D3D" }}/>
            </Pressable>
        </View>
        </>
    )

}

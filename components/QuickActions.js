import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
import Map from './Map';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SchoolDirections } from './SchoolDirectionsModal';

export default function QuickActions({ navigation }) {

    const [SchoolDirections, setModalVisibleMap] = useState(false);

    const navigation1 = useNavigation();

    return (
        <>

        <Modal
            animationType="slide"
            presentationStyle='pageSheet'
            visible={SchoolDirections}
            onRequestClose={() => {
                setModalVisibleMap(!SchoolDirections);
            }}>
            <SchoolDirections></SchoolDirections>
        </Modal>

        <Text style={{ left: 40, fontFamily: 'OpenSans_700Bold', marginTop: '10%', fontSize: 25, color: "#3D3D3D" }}>Quick Actions</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: 7, paddingLeft: 40 }} snapToInterval={370} decelerationRate={0}>
                <Pressable style = {({ pressed }) => [{opacity: pressed ? 0.5: 1, borderWidth: 3, borderColor: "#3D3D3D" , borderRadius: 10 }]} onPress={() => {
                    setModalVisibleMap(true)
                }} >
                    <MaterialCommunityIcons name="map-search" size={100} style = {{ color: "#3D3D3D" }}/>
                </Pressable>
                <Pressable style = {({ pressed }) => [{opacity: pressed ? 0.5: 1, borderWidth: 3, borderColor: "#3D3D3D" , borderRadius: 10, marginLeft: 15 }]} onPress={() => navigation1.navigate("Photos")}>
                    <MaterialCommunityIcons name="share" size={100} style = {{ color: "#3D3D3D" }}/>
                </Pressable>
            </ScrollView >
        </View>
        </>
    )
}


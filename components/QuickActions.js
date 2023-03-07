import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
import Map from './Map';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Link, useNavigation } from '@react-navigation/native';
import { SchoolDirections } from './SchoolDirectionsModal';
import { Linking } from 'react-native';
import PhotoShare from '../screens/PhotoShare';

export default function QuickActions() {

    const navigation = useNavigation();

    const [SchoolDirections, setModalVisibleMap] = useState(false);



    const handleSchoology = () => {
        Linking.openURL('https://livingston.schoology.com/');
    }

    const handleGenesis = () => {
        Linking.openURL('https://students.livingston.org/');
    }

    const openMaps = () => {
        Linking.openURL('http://maps.apple.com/?q=Livingston+High+School+New+Jersey');
    }



    return (
        <>


            <Text style={{ left: 40, fontFamily: 'OpenSans_700Bold', marginTop: '10%', fontSize: 25, color: "#3D3D3D" }}>Quick Actions</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: 7, paddingLeft: 40 }} snapToInterval={200} decelerationRate={0}>
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={openMaps}>
                        <Image source={require('../assets/imgs/quick/direct.png')} style={{ width: 230, height: 175, borderRadius: 10 }}
                        />
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={handleGenesis}>
                        <Image source={require('../assets/imgs/quick/gen.png')} style={{ width: 230, height: 175, borderRadius: 10, marginLeft: 20 }}
                        />
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={handleSchoology}>
                        <Image source={require('../assets/imgs/quick/school.png')} style={{ width: 230, height: 175, borderRadius: 10, marginLeft: 20 }}
                        />
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate("PhotoShare")}>
                        <Image source={require('../assets/imgs/quick/share.png')} style={{ width: 230, height: 175, borderRadius: 10, marginLeft: 20 }}
                        />
                    </Pressable>
                    <View style={{ width: 50, height: 175, borderRadius: 10, marginLeft: 20 }} />
                </ScrollView >
            </View>
        </>
    )
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';



export default function ImpEvents() {
    const slides = ['https://patch.com/img/cdn20/users/22844250/20200421/014148/styles/patch_image/public/livingston-highschool-schoolpr___21133742706.jpg', 'https://patch.com/img/cdn/users/22844250/2015/05/raw/20150555523bf088bd6.jpg', 'https://patch.com/img/cdn/users/22821264/2014/08/raw/5400e8ea02f3c.png']

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);



    return (
        <>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}>
                <View style={{ position: 'absolute', backgroundColor: 'grey', top: 10, alignContent: 'center', height: 5, width: '10%', alignSelf: 'center', borderRadius: 10 }}>
                </View>
                <Text style={{ fontSize: 80, alignSelf: 'center' }}>1</Text>
            </Modal>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}>
                <View style={{ position: 'absolute', backgroundColor: 'grey', top: 10, alignContent: 'center', height: 5, width: '10%', alignSelf: 'center', borderRadius: 10 }}>
                </View>
                <Text style={{ fontSize: 80, alignSelf: 'center' }}>2</Text>

            </Modal>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible3}
                onRequestClose={() => {
                    setModalVisible3(!modalVisible3);
                }}>
                <View style={{ position: 'absolute', backgroundColor: 'grey', top: 10, alignContent: 'center', height: 5, width: '10%', alignSelf: 'center', borderRadius: 10 }}>
                </View>
                <Text style={{ fontSize: 80, alignSelf: 'center' }}>3</Text>
            </Modal>

            <Text style={{ left: 40, fontFamily: 'OpenSans_700Bold', marginTop: '70%', fontSize: 25, color: "#3D3D3D" }}>Important Information</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: 7, paddingLeft: 40 }} snapToInterval={370} decelerationRate={0}>
                    <Pressable onPress={() => setModalVisible1(true)} style={({ pressed }) => [
                        {
                            opacity: pressed
                                ? '0.5'
                                : '1'
                        },
                    ]}>
                        <Image
                            source={{
                                uri: slides[0]
                            }}
                            style={{ width: 350, height: 175, borderRadius: 10 }}
                        />
                    </Pressable>
                    <Pressable onPress={() => setModalVisible2(true)} style={({ pressed }) => [
                        {
                            opacity: pressed
                                ? '0.5'
                                : '1'
                        },
                    ]}>
                        <Image
                            source={{
                                uri: slides[1]
                            }}
                            style={{ width: 350, height: 175, borderRadius: 10, marginLeft: 20 }}
                        />
                    </Pressable>
                    <Pressable onPress={() => setModalVisible3(true)} style={({ pressed }) => [
                        {
                            opacity: pressed
                                ? '0.5'
                                : '1'
                        },
                    ]}>
                        <Image
                            source={{
                                uri: slides[2]
                            }}
                            style={{ width: 350, height: 175, borderRadius: 10, marginLeft: 20 }}
                        />
                    </Pressable>

                    <View
                        style={{ width: 50, height: 175, borderRadius: 10, marginLeft: 20 }}
                    />
                </ScrollView >
            </View>
        </>
    )
}

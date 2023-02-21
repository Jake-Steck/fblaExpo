import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
import Modal1 from './sportInfo/Modal1';
import Modal2 from './sportInfo/Modal2';
import Modal3 from './sportInfo/Modal3';

export default function Sports() {

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    const closeModal1 = () => {
        setModalVisible1(false);
    }

    const closeModal2 = () => {
        setModalVisible2(false);
    }

    const closeModal3 = () => {
        setModalVisible3(false);
    }

    return (
        <>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}>
                <Modal1 closeModal={closeModal1} setModalVisible={setModalVisible1} />
            </Modal>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}>
                <Modal2 closeModal={closeModal2} setModalVisible={setModalVisible2} />
            </Modal>

            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalVisible3}
                onRequestClose={() => {
                    setModalVisible3(!modalVisible3);
                }}>
                <Modal3 closeModal={closeModal3} setModalVisible={setModalVisible3} />

            </Modal>

            <Text style={{ left: 40, fontFamily: 'OpenSans_700Bold', marginTop: '10%', fontSize: 25, color: "#3D3D3D" }}>Upcoming Sporting Events</Text>
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
                            source={require('../assets/imgs/sports/hockey.png')}
                            style={{ width: 210, height: 175, borderRadius: 10 }}
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
                            source={require('../assets/imgs/sports/swim.png')}
                            style={{ width: 210, height: 175, borderRadius: 10, marginLeft: 20 }}
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
                            source={require('../assets/imgs/sports/basketball.png')}
                            style={{ width: 210, height: 175, borderRadius: 10, marginLeft: 20 }}
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


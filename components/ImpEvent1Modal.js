import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable, Modal } from 'react-native';

export default function ImpEvent1Modal() {
    const [modalvisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                presentationStyle='pageSheet'
                visible={modalvisible}
                onRequestClose={() => {
                    setModalVisible(!modalvisible);
                }}
            />


        </View>
    )
}


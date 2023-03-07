import React, { useState, useEffect } from 'react';
import PhotoHeader from '../components/AttendanceHeader';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Component,
    Pressable,
    TextInput,
    Alert,
    Image,
    Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default function ViewPhotos() {
    const navigation = useNavigation();
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const getImages = async () => {
        const storage = getStorage();
        const imagesRef = ref(storage, 'images');
        const imageList = await listAll(imagesRef);

        const urls = await Promise.all(
            imageList.items.map(async (imageRef) => {
                const url = await getDownloadURL(imageRef);
                return url;
            })
        );

        setImageUrls(urls);
    };

    useEffect(() => {
        getImages();
    }, []);

    const handleImagePress = (index) => {
        setSelectedImageIndex(index);
    };

    const handleModalClose = () => {
        setSelectedImageIndex(null);
    };

    return (
        <>
            <PhotoHeader />
            <View>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color="black"
                    style={{ position: 'absolute', marginTop: '15%', marginLeft: '5%' }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.text}>View Photos</Text>
            </View>
            <View style={{ marginTop: '45%' }} />
            <View style={styles.formatImage}>
                {imageUrls.map((url, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleImagePress(index)}
                        style={styles.imageContainer}
                    >
                        <Image source={{ uri: url }} style={[styles.image, {}]} />
                    </TouchableOpacity>
                ))}
            </View>
            <Modal visible={selectedImageIndex !== null} animationType="slide">
                <View style={styles.modalContent}>
                    <Image
                        source={{ uri: imageUrls[selectedImageIndex] }}
                        style={styles.modalImage}
                    />
                    <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: '40%',
        marginLeft: '3%',
        color: '#3D3D3D',
    },
    imageContainer: {
        width: '30%',
        height: 100,
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    formatImage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: "10%",
        right: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 20,
    },
});
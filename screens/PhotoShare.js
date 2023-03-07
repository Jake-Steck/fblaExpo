import { StyleSheet, Text, View, Button, TextInput, Pressable, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import 'firebase/storage';

export default function PhotoShare({ navigation }) {


    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const storage = getStorage();
    const d = new Date();
    const fileName = `${d.getTime()}.jpg`;
    const storageRef = ref(storage, `images/${fileName}`);

    const uploadImage = async () => {
        const response = await fetch(selectedImage);
        const blob = await response.blob();
        const uploadTask = uploadBytesResumable(storageRef, blob);
        uploadTask.on('state_changed', (snapshot) => {
            setUploading(true);
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }
            , (error) => {
                setUploading(false);
                console.log(error);
                alert('Sorry, Try again.');
            }, () => {
                setUploading(false);
                console.log('Upload completed');
                alert('Image uploaded successfully');
            });
    }







    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
                const { cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };


    return (
        <>
            <View style={styles.container}>
                <Image source={require('../assets/imgs/Aheader.png')} style={{ position: 'absolute', width: '100%', height: '40%', top: 0 }} />
                <Pressable onPress={pickImage} style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    }, {
                        top: "66.7%", right: 75
                    }
                ]}>
                    <MaterialCommunityIcons name="upload" size={90} style={{ color: "#75D29B", alignSelf: 'center', borderWidth: 4, borderRadius: 10, borderColor: "#75D29B", top: '10%' }} />
                </Pressable>
                <Pressable onPress={takePhoto} style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    }, {
                        top: "55%", left: 75
                    }
                ]}>
                    <MaterialCommunityIcons name="camera" size={90} style={{ color: "#75D29B", alignSelf: 'center', borderWidth: 4, borderRadius: 10, borderColor: "#75D29B", top: '20%' }} />
                </Pressable>
                <View style={{ bottom: "5%", borderColor: "#75D29B", borderWidth: 3, padding: 5 }}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={{ width: 300, height: 450 }} />
                    ) : (
                        <View style={{ width: 300, height: 450, backgroundColor: 'white' }} />
                    )}
                </View>

                <View style={{ flex: 1, flexDirection: 'row', top: '20%' }}>
                    <Pressable onPress={() => {
                        uploadImage();
                    }
                    } style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }, {
                            borderRadius: 20, borderWidth: 3, borderColor: "#75D29B", width: 175, height: 75, bottom: "-2%", marginRight: 10
                        }
                    ]}>
                        <Text style={{ color: "#75D29B", fontSize: 40, fontWeight: "bold", top: "13%", alignSelf: 'center' }}>Upload</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ViewPhotos')} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }, {
                            borderRadius: 20, borderWidth: 3, borderColor: "#75D29B", width: 200, height: 75, bottom: "-2%"
                        }
                    ]}>
                        <Text style={{ color: "#75D29B", fontSize: 32, fontWeight: "bold", top: "20%", alignSelf: 'center' }}>View Photos</Text>
                    </Pressable>
                </View>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color="black"
                    style={{ position: 'absolute', top: '8%', left: '10%' }}
                    onPress={() => navigation.goBack()}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



/* <Pressable onPress={() => {
                const uploadTask = uploadBytesResumable(storageRef, selectedImage);


                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect error.serverResponse
                                break;
                        }
                    });
            }
            } style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1
                }, {
                    borderRadius: 20, borderWidth: 3, borderColor: "#75D29B", width: 200, height: 75, bottom: "-2%"
                }
            ]}>
                <Text style={{ color: "#75D29B", fontSize: 40, fontWeight: "bold", top: "13%", alignSelf: 'center' }}>Upload</Text>
            </Pressable> */
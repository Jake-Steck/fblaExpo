import { StyleSheet, Text, View, Button, TextInput, Pressable, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import {Image} from 'react-native';
import { signOut } from 'firebase/auth';
import tw from 'tailwind-react-native-classnames';
import { User } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { auth, db } from '../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import authUser from '../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import firebase from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import 'firebase/storage';
import { fbUriToFirebaseStorage } from '../components/ImageUpload.js';

export default function PhotoShare({ navigation }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadImage = async () => {
    setUploading(true);
    try {
      await fbUriToFirebaseStorage(
        selectedImage,
        'images',
        (progress) => console.log(`Upload progress: ${progress}`),
        (downloadUrl) => console.log(`Download URL: ${downloadUrl}`),
      );
      console.log('Image uploaded to Firebase Storage');
      setUploading(false);
    } catch (error) {
      console.log('Error uploading image: ', error);
      setUploading(false);
    }
  };
  
  

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

        if (!result.cancelled) {
        setSelectedImage(result.uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
        });

        if (!result.cancelled) {
        setSelectedImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/imgs/Aheader.png')} style={{ position: 'absolute', width: '100%', height: '40%', top: 0 }} />
            <Pressable onPress={pickImage} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }, {
                            top: "66.7%", right: 75
                        }
                    ]}>
                <MaterialCommunityIcons name="upload" size={90} style = {{ color: "#75D29B", alignSelf: 'center', borderWidth: 4, borderRadius: 10, borderColor: "#75D29B" }}/>
            </Pressable>
            <Pressable onPress={takePhoto} style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        }, {
                            top: "55%", left: 75
                        }
                    ]}>
                <MaterialCommunityIcons name="camera" size={90} style = {{ color: "#75D29B", alignSelf: 'center', borderWidth: 4, borderRadius: 10, borderColor: "#75D29B" }}/>
            </Pressable>
            <View style={{ bottom: "15%", borderColor: "#75D29B", borderWidth: 3, padding: 5}}>
            {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={{ width: 300, height: 450 }} />
                ) : (
                <View style={{ width: 300, height: 450, backgroundColor: 'white' }} />
                )}
            </View>
            <Pressable onPress={uploadImage} style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1
                }, {
                    borderRadius: 20, borderWidth: 3, borderColor: "#75D29B", width: 200, height: 75, bottom: "-2%"
                }
            ]}>
                <Text style={{ color: "#75D29B", fontSize: 40, fontWeight: "bold", top: "13%", alignSelf: 'center'}}>Upload</Text>
            </Pressable>
             <MaterialIcons name="arrow-back-ios" size={40} color="black" style={{ position: 'absolute', marginTop: '190%', right: "80%" }} onPress={() => navigation.goBack()} />
        </View>
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

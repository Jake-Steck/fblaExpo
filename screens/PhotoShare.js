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
import { getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import 'firebase/storage';
import { ActivityIndicator } from 'react-native-paper';
import _app from '../firebaseConfig';

export default function PhotoShare({ navigation }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const storage = getStorage();
  const storageRef = ref(storage, 'images/stars15.jpg');

  const uploadImage = async () => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', selectedImage, true);
        xhr.send(null);
      });
  
      const ref = firebase.storage().ref().child(`Pictures/Image1`);
      const snapshot = ref.put(blob);
      setUploading(true);
  
      snapshot.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        (error) => {
          setUploading(false);
          console.log(error);
          blob.close();
          throw error;
        },
        () => {
          snapshot.snapshot.ref.getDownloadURL().then((url) => {
            setUploading(false);
            console.log("Download URL: ", url);
            setImage(url);
            blob.close();
            return url;
          });
        }
      );
    } catch (error) {
      console.log(error);
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
            <Pressable onPress={() => {
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

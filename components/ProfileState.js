import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import StudentProf from '../screens/ProfileS';
import TeacherProf from '../screens/ProfileT';
import OtherProf from '../screens/ProfileP';
import SignIn from '../screens/SignIn';
import { auth, db } from '../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

export default function ProfileState({ navigation }) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [roleLoaded, setRoleLoaded] = useState(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                const userRef = doc(collection(db, "users"), authUser.uid);
                getDoc(userRef).then((doc) => {
                    if (doc.exists) {
                        const userRole = doc.data().role;
                        setRole(userRole);
                    } else {
                        console.log('No such document!');
                    }
                    setRoleLoaded(true);
                }).catch((error) => {
                    console.log('Error getting document:', error);
                });
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        });

        return unsubscribe;
    }, []);

    if (!isSignedIn) {
        return <SignIn navigation={navigation} />;
    } else if (!roleLoaded) {
        return <View><Text>Loading...</Text></View>;
    } else if (role === 'teacher') {
        return <TeacherProf navigation={navigation} />;

    } else if (role === 'student') {
        return <StudentProf />;
    } else {
        return <OtherProf />;
    }
}

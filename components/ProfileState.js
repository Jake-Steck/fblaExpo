import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import StudentProf from '../screens/ProfileS';
import TeacherProf from '../screens/ProfileT';
import SignIn from '../screens/SignIn';
import { auth } from '../firebaseConfig';

export default function ProfileState({ navigation }) {
    const [isSignedIn, setIsSignedIn] = React.useState(false); // Local signed-in state.
    const [user, setUser] = React.useState(null); // User object.

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setIsSignedIn(!!authUser);
        });

        return unsubscribe;
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isSignedIn ? (
                <StudentProf />
            ) : (
                <SignIn navigation={navigation} />
            )}
        </View>
    );
}

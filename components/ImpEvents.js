import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Header() {
    return (
        <>
            <Text style={tw`text-xl`}>Important Events</Text>
        </>
    )
}

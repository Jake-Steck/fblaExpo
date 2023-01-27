import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ImpEvents from '../components/ImpEvents';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({ navigation }) {
    return (
        <>
            <Header />
            <ImpEvents />
        </>
    );
}
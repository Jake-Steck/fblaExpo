import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ImpEvents from '../components/ImpEvents';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({ navigation }) {
    return (
        <>
            <HomeHeader />
            <ImpEvents />
        </>
    );
}
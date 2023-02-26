import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ImpEvents from '../components/ImpEvents';
import Sports from '../components/Sports';

export default function Home() {

    const windowHeight = Dimensions.get('window').height;

    return (
        <>
            <HomeHeader />
            <ScrollView contentContainerStyle={{ bottom: 20 }}>
                <ImpEvents />
                <Sports />
            </ScrollView>
        </>
    );
}

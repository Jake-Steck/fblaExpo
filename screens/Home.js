import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ImpEvents from '../components/ImpEvents';
import Sports from '../components/Sports';
import NotificationTask from '../components/NotificationTask';

export default function Home() {

    return (
        <ScrollView>
            <HomeHeader />
            <ImpEvents />
            <Sports />
            <NotificationTask />
        </ScrollView>
    );
}

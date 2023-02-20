import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ImpEvents from '../components/ImpEvents';
import NotificationTask from '../components/NotificationTask';
export default function Home() {

    return (
        <>
            <HomeHeader />
            <ImpEvents />
            <NotificationTask />
        </>
    );
}

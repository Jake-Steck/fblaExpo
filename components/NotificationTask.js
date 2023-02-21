import { useState, useEffect, useRef } from 'react';
import { Text, View, Platform } from 'react-native';
import { Asset } from 'expo-asset';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import quotes from './quotes.json';
import notificationIcon from '../assets/icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) =>
            setExpoPushToken(token)
        );

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
            });

        schedulePushNotification();

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current
            );
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Title: {notification && notification.request.content.title} </Text>
            <Text>Body: {notification && notification.request.content.body}</Text>
            <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
    );
}

function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    console.log(quotes[index]);
    return quotes[index];
}

// async function schedulePushNotification() {
//     console.log('Scheduling push notification...');
//     const icon = await Asset.fromModule(notificationIcon).downloadAsync();
//     const randomQuote = getRandomQuote();
//     const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
//     const notificationDate = new Date();
//     notificationDate.setHours(7, 0, 0); // Set notification time to 7:17 PM every day
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title: `Have a great ${day}!`,
//             body: `"${randomQuote.quote}" -${randomQuote.author}`,
//             data: { data: 'goes here' },
//             icon: icon,
//             badge: 1,
//         },
//         trigger: {
//             hour: notificationDate.getHours(),
//             minute: notificationDate.getMinutes(),
//             repeats: true,
//         },
//     }).catch((error) => console.log(error));
// }

async function schedulePushNotification() {
    console.log('Scheduling push notification...');
    const icon = await Asset.fromModule(notificationIcon).downloadAsync();
    const randomQuote = getRandomQuote();
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
    const notificationDate = new Date();
    notificationDate.setHours(13, 3, 0); // Set notification time to 7:00 AM every day

    // Get the last notification date from the device storage
    const lastNotificationDate = await AsyncStorage.getItem('lastNotificationDate');
    const now = new Date();

    if (lastNotificationDate) {
        const lastNotification = new Date(lastNotificationDate);
        const timeDiff = Math.abs(now.getTime() - lastNotification.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (diffDays < 1 && lastNotificationDate) {
            const lastNotification = new Date(lastNotificationDate);
            const timeDiff = Math.abs(now.getTime() - lastNotification.getTime());
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            console.log('Last notification date:', lastNotification);
            console.log('Time difference in days:', diffDays);

            if (diffDays < 1) {
                console.log('Notification already sent today, skipping...');
                return;
            }
        }

    }

    await Notifications.scheduleNotificationAsync({
        content: {
            title: `Have a great ${day}!`,
            body: `"${randomQuote.quote}" -${randomQuote.author}`,
            data: { data: 'goes here' },
            icon: icon,
            badge: 1,
        },
        trigger: {
            hour: notificationDate.getHours(),
            minute: notificationDate.getMinutes(),
            repeats: true,
        },
    }).then(async () => {
        // Store the last notification date in the device storage
        await AsyncStorage.setItem('lastNotificationDate', now.toString());
    }).catch((error) => console.log(error));
}


async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

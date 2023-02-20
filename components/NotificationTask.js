// import { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';
// import { Asset } from 'expo-asset';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
// import quotes from './quotes.json';
// import notificationIcon from '../assets/icon.png';





// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: false,
//         shouldSetBadge: false,
//     }),
// });

// export default function App() {
//     const [expoPushToken, setExpoPushToken] = useState('');
//     const [notification, setNotification] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const notificationListener = useRef();
//     const responseListener = useRef();

//     useEffect(() => {
//         registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//         notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//             setNotification(notification);
//         });

//         responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//             console.log(response);
//         });

//         return () => {
//             Notifications.removeNotificationSubscription(notificationListener.current);
//             Notifications.removeNotificationSubscription(responseListener.current);
//         };
//     }, []);

//     if (!isVisible) {
//         return null;
//     }

//     return (
//         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Title: {notification && notification.request.content.title} </Text>
//             <Text>Body: {notification && notification.request.content.body}</Text>
//             <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//             <Button
//                 title="Press to schedule a notification"
//                 onPress={async () => {
//                     await schedulePushNotification();
//                 }}
//             />
//         </View>
//     );
// }




// function getRandomQuote() {
//     const index = Math.floor(Math.random() * quotes.length);
//     console.log(quotes[index]);
//     return quotes[index];
// }

// // async function schedulePushNotification() {
// //     const icon = await Asset.fromModule(notificationIcon).downloadAsync();
// //     const randomQuote = getRandomQuote();
// //     const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

// //     await Notifications.scheduleNotificationAsync({
// //         content: {
// //             title: `Have a great ${day}!`,
// //             body: `"${randomQuote.quote}" -${randomQuote.author}`,
// //             data: { data: 'goes here' },
// //             icon: icon,
// //             badge: 1,


// //         },
// //         trigger: { seconds: 2 },
// //     });
// // }

// async function schedulePushNotification() {
//     console.log('Scheduling push notification...');
//     const icon = await Asset.fromModule(notificationIcon).downloadAsync();
//     const randomQuote = getRandomQuote();
//     const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
//     const notificationDate = new Date();
//     notificationDate.setHours(20, 45, 0); // Set notification time to 7 AM every day
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
//             repeats: true
//         },
//     }).catch(error => console.log(error));
// }

// async function registerForPushNotificationsAsync() {
//     let token;

//     if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//             name: 'default',
//             importance: Notifications.AndroidImportance.MAX,
//             vibrationPattern: [0, 250, 250, 250],
//             lightColor: '#FF231F7C',
//         });
//     }

//     if (Device.isDevice) {
//         const { status: existingStatus } = await Notifications.getPermissionsAsync();
//         let finalStatus = existingStatus;
//         if (existingStatus !== 'granted') {
//             const { status } = await Notifications.requestPermissionsAsync();
//             finalStatus = status;
//         }
//         if (finalStatus !== 'granted') {
//             alert('Failed to get push token for push notification!');
//             return;
//         }
//         token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token);
//     } else {
//         alert('Must use physical device for Push Notifications');
//     }

//     return token;
// }

// import { useEffect } from 'react';
// import { Platform } from 'react-native';
// import { Asset } from 'expo-asset';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
// import * as TaskManager from 'expo-task-manager';
// import * as BackgroundFetch from 'expo-background-fetch';
// import quotes from './quotes.json';
// import notificationIcon from '../assets/icon.png';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: false,
//         shouldSetBadge: false,
//     }),
// });

// const NOTIFICATION_TASK_NAME = 'notificationTask';
// const BACKGROUND_FETCH_TASK_NAME = 'backgroundFetchTask';

// TaskManager.defineTask(NOTIFICATION_TASK_NAME, async () => {
//     console.log('Running notification task');
//     const icon = await Asset.fromModule(notificationIcon).downloadAsync();
//     const randomQuote = getRandomQuote();
//     const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title: `Have a great ${day}!`,
//             body: `"${randomQuote.quote}" - ${randomQuote.author}`,
//             data: { data: 'goes here' },
//             icon: icon,
//             badge: 1,
//         },
//         trigger: null, // The notification is scheduled in this function, not the trigger.
//     }).catch(error => console.log(error));
//     return BackgroundFetch.Result.NewData;
// });

// TaskManager.registerTaskAsync(NOTIFICATION_TASK_NAME);

// BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK_NAME, {
//     minimumInterval: 24 * 60, // The task is run at least once per day.
// });

// export default function NotificationTask() {
//     useEffect(() => {
//         registerForPushNotificationsAsync();
//         return () => {
//             console.log('Unregistering tasks');
//             TaskManager.unregisterTaskAsync(NOTIFICATION_TASK_NAME);
//             BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK_NAME);
//         };
//     }, []);

//     return null;
// }

// function getRandomQuote() {
//     const index = Math.floor(Math.random() * quotes.length);
//     return quotes[index];
// }

// async function registerForPushNotificationsAsync() {
//     if (Platform.OS === 'android') {
//         await Notifications.setNotificationChannelAsync('default', {
//             name: 'default',
//             importance: Notifications.AndroidImportance.MAX,
//             vibrationPattern: [0, 250, 250, 250],
//             lightColor: '#FF231F7C',
//         });
//     }

//     if (Device.isDevice) {
//         const { status: existingStatus } = await Notifications.getPermissionsAsync();
//         let finalStatus = existingStatus;
//         if (existingStatus !== 'granted') {
//             const { status } = await Notifications.requestPermissionsAsync();
//             finalStatus = status;
//         }
//         if (finalStatus !== 'granted') {
//             console.log('Failed to get push token for push notification!');
//             return;
//         }
//         const token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token);
//     } else {
//         console.log('Must use physical device for Push Notifications');
//     }
// }

// // import { useState, useEffect, useRef } from 'react';
// // import { Text, View, Platform } from 'react-native';
// // import { Asset } from 'expo-asset';
// // import * as Device from 'expo-device';
// // import * as Notifications from 'expo-notifications';
// // import * as TaskManager from 'expo-task-manager';
// // import quotes from './quotes.json';
// // import notificationIcon from '../assets/icon.png';

// // // Set the default notification handler to show an alert
// // // but not play a sound or set a badge
// // Notifications.setNotificationHandler({
// //     handleNotification: async () => ({
// //         shouldShowAlert: true,
// //         shouldPlaySound: false,
// //         shouldSetBadge: false,
// //     }),
// // });

// // // Define the task that schedules push notifications
// // TaskManager.defineTask('schedulePushNotification', async () => {
// //     console.log('Scheduling push notification...');

// //     // Load the notification icon from the assets
// //     const icon = await Asset.fromModule(notificationIcon).downloadAsync();

// //     // Get a random quote from the quotes JSON file
// //     const randomQuote = getRandomQuote();

// //     // Get the current day of the week
// //     const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

// //     // Schedule the notification to go off at 7 AM every day, with a badge and icon
// //     await Notifications.scheduleNotificationAsync({
// //         content: {
// //             title: `Have a great ${day}!`,
// //             body: `"${randomQuote.quote}" -${randomQuote.author}`,
// //             data: { data: 'goes here' },
// //             icon: icon,
// //             badge: 1,
// //         },
// //         trigger: {
// //             seconds: 0,
// //             minutes: 24,
// //             repeats: true,
// //             hour: 7,
// //         },
// //     }).catch(error => console.log(error));
// // });

// // export default function App() {
// //     // Set up state for the push notification token, the current notification,
// //     // and whether the component is currently visible
// //     const [expoPushToken, setExpoPushToken] = useState('');
// //     const [notification, setNotification] = useState(false);
// //     const [isVisible, setIsVisible] = useState(true);

// //     // Set up refs for the notification and response listeners
// //     const notificationListener = useRef();
// //     const responseListener = useRef();

// //     useEffect(() => {
// //         console.log('Registering tasks');

// //         // Register for push notifications and save the push token
// //         registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

// //         // Add a listener for notifications received
// //         notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
// //             setNotification(notification);
// //         });

// //         // Add a listener for notification responses
// //         responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
// //             console.log(response);
// //         });

// //         // Check if the 'schedulePushNotification' task is defined, and define it if not
// //         TaskManager.isTaskDefined('schedulePushNotification').then(defined => {
// //             if (defined === false) {
// //                 TaskManager.defineTask('schedulePushNotification', async () => {
// //                     await schedulePushNotification();
// //                 });
// //             }
// //         });

// //         // Check if the 'schedulePushNotification' task is scheduled, and schedule it if not
// //         TaskManager.getRegisteredTasksAsync().then(tasks => {
// //             const task = tasks.find(({ taskName }) => taskName === 'schedulePushNotification');
// //             if (!task) {
// //                 TaskManager.scheduleTaskAsync('schedulePushNotification', {
// //                     seconds: 0,
// //                     repeats: true,
// //                 });
// //             }
// //         });

// //         // Clean up the notification and response listeners when the component is unmounted
// //         useEffect(() => {
// //             return () => {
// //                 Notifications.removeNotificationSubscription(notificationListener.current);
// //                 Notifications.removeNotificationSubscription(responseListener.current);
// //             };
// //         }, []);

// //         // Render the app
// //         return (
// //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //                 <Text>Your push token: {expoPushToken}</Text>
// //                 {notification && (
// //                     <View style={{ marginTop: 20 }}>
// //                         <Text>Received a notification:</Text>
// //                         <Text>{JSON.stringify(notification, null, 2)}</Text>
// //                     </View>
// //                 )}
// //             </View>
// //         );
// //     }, []);

// //     async function registerForPushNotificationsAsync() {
// //         let token;
// //         if (Platform.OS === 'android') {
// //             Notifications.setNotificationChannelAsync('default', {
// //                 name: 'default',
// //                 importance: Notifications.AndroidImportance.MAX,
// //                 vibrationPattern: [0, 250, 250, 250],
// //                 lightColor: '#FF231F7C',
// //             });
// //         }
// //         if (Device.isDevice) {
// //             const { status: existingStatus } = await Notifications.getPermissionsAsync();
// //             let finalStatus = existingStatus;
// //             if (existingStatus !== 'granted') {
// //                 const { status } = await Notifications.requestPermissionsAsync();
// //                 finalStatus = status;
// //             }
// //             if (finalStatus !== 'granted') {
// //                 console.log('Failed to get push token for push notification!');
// //                 return;
// //             }
// //             token = (await Notifications.getExpoPushTokenAsync()).data;
// //             console.log(token);
// //         } else {
// //             console.log('Must use physical device for Push Notifications');
// //         }

// //         if (Platform.OS === 'android') {
// //             Notifications.setNotificationChannelAsync('default', {
// //                 name: 'default',
// //                 importance: Notifications.AndroidImportance.MAX,
// //                 vibrationPattern: [0, 250, 250, 250],
// //                 lightColor: '#FF231F7C',
// //             });
// //         }

// //         return token;
// //     }
// // }


import { useState, useEffect, useRef } from 'react';
import { Text, View, Platform } from 'react-native';
import { Asset } from 'expo-asset';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import quotes from './quotes.json';
import notificationIcon from '../assets/icon.png';

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

async function schedulePushNotification() {
    console.log('Scheduling push notification...');
    const icon = await Asset.fromModule(notificationIcon).downloadAsync();
    const randomQuote = getRandomQuote();
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
    const notificationDate = new Date();
    notificationDate.setHours(7, 0, 0); // Set notification time to 7:17 PM every day
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

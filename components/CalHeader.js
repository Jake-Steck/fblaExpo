// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { useState, useEffect } from 'react';
// import * as Calendar from 'expo-calendar';
// import CalendarPicker from 'react-native-calendar-picker';


// async function getDefaultCalendarSource() {
//     const calendars = await Calendar.getCalendarsAsync(
//         Calendar.EntityTypes.EVENT
//     );
//     const defaultCalendars = calendars.filter(
//         (each) => each.source.name === 'Default'
//     );
//     return defaultCalendars.length
//         ? defaultCalendars[0].source
//         : calendars[0].source;
// }

// async function createCalendar() {
//     const defaultCalendarSource =
//         Platform.OS === 'ios'
//             ? await getDefaultCalendarSource()
//             : { isLocalAccount: true, name: 'Expo Calendar' };
//     const newCalendarID = await Calendar.createCalendarAsync({
//         title: 'Expo Calendar',
//         color: 'blue',
//         entityType: Calendar.EntityTypes.EVENT,
//         sourceId: defaultCalendarSource.id,
//         source: defaultCalendarSource,
//         name: 'internalCalendarName',
//         ownerAccount: 'personal',
//         accessLevel: Calendar.CalendarAccessLevel.OWNER,
//     });
//     console.log(`Your new calendar ID is: ${newCalendarID}`);
//     return newCalendarID;
// }

// export default function CalHeader() {
//     const [selectedStartDate, setSelectedStartDate] = useState(null);


//     const startDate = selectedStartDate
//         ? selectedStartDate.format('YYYY-MM-DD').toString()
//         : '';

//     return (
//         <>
//             <View style={{ marginTop: "20%", zIndex: 0 }}>
//                 <CalendarPicker
//                     onDateChange={setSelectedStartDate}
//                     selectedDayColor={'lightgreen'}
//                     textStyle={{ fontFamily: 'OpenSans_700Bold' }}
//                     selectedDayStyle={{ backgroundColor: 'lightgreen' }}
//                 />
//             </View>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     dateText: {
//         margin: 16,
//     },
// });





import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}



export default function Calendar() {
    const [items, setItems] = React.useState({});
    const [date, setDate] = React.useState(new Date());
    const today = timeToString(date);
    const [selected, setSelected] = React.useState(today);






    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }


    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Card>
                    <Card.Content>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda
                minDate={today}
                items={items}
                loadItemsForMonth={loadItems}
                selected={selected}
                renderItem={renderItem}


            />
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
});
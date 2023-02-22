import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
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
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const minDate = timeToString(yesterday);
    const [selected, setSelected] = React.useState(Date.now());


    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Card>
                    <Card.Content>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemTime}>{item.time}</Text>
                                <Text style={styles.itemLocation}>{item.location}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda
                minDate={"2022-09-01"}
                items={{
                    '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
                    '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
                    '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],

                }}
                renderItem={renderItem}
                selected={selected}
                renderEmptyData={() => {
                    return <View />;
                }}
                rowHasChanged={(r1, r2) => {
                    return r1.name !== r2.name;
                }}
                theme={{
                    agendaDayTextColor: 'black',
                    agendaDayNumColor: 'black',
                    agendaTodayColor: 'black',
                    agendaKnobColor: 'black'
                }}
                renderEmptyDate={() => {
                    return (
                        <View style={styles.emptyDate}>
                            <Text>No Events</Text>
                        </View>
                    );
                }}




            />
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
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30

    },
    itemContent: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemTime: {
        marginRight: 10,
        fontSize: 14
    },
    itemLocation: {
        fontSize: 14
    }
});


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

// export default function Calendar() {
//     const [items, setItems] = useState({});
//     const [date, setDate] = useState(new Date());
//     const [loading, setLoading] = useState(true);

//     const today = timeToString(date);
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     const minDate = timeToString(yesterday);
//     const [selected, setSelected] = useState(Date.now());

//     useEffect(() => {
//         loadItemsForMonth({ year: date.getFullYear(), month: date.getMonth() + 1 });
//     }, [date]);

//     const loadItems = (day) => {
//         setLoading(true);
//         setTimeout(() => {
//             // initialize items object for each day on the calendar
//             for (let i = -15; i < 85; i++) {
//                 const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//                 const strTime = timeToString(time);
//                 if (!items[strTime]) {
//                     items[strTime] = [];
//                 }
//             }

//             // add custom event for March 1, 2023
//             const march1 = '2023-03-06';
//             if (!items[march1]) {
//                 items[march1] = [];
//             }
//             items[march1].push({ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" });

//             const march2 = '2023-03-07';
//             if (!items[march2]) {
//                 items[march2] = [];
//             }
//             items[march2].push({ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" });

//             const march3 = '2023-03-08';
//             if (!items[march3]) {
//                 items[march3] = [];
//             }
//             items[march3].push({ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" });

//             const march10 = '2023-03-10';
//             if (!items[march10]) {
//                 items[march10] = [];
//             }
//             items[march10].push({ name: 'Spring Musical - Show 2', time: '7:00 PM', location: "Livingston High School" });

//             const march17 = '2023-03-17';
//             if (!items[march17]) {
//                 items[march17] = [];
//             }
//             items[march17].push({ name: 'Juniory Prom', time: '6:00 PM', location: "Sheraton" });

//             const april3 = '2023-04-3';
//             if (!items[april3]) {
//                 items[april3] = [];
//             }
//             items[april3].push({ name: 'Start of Spring Break', time: 'All Day', location: "Enjoy Spring Break!" });

//             const april10 = '2023-04-10';
//             if (!items[april10]) {
//                 items[april10] = [];
//             }
//             items[april10].push({ name: 'No School for Students', time: 'All Day', location: "Enjoy your day off!" });

//             const april11 = '2023-04-11';
//             if (!items[april11]) {
//                 items[april11] = [];
//             }
//             items[april11].push({ name: 'Students Back from Spring Break', time: 'All Day', location: "Livingston High School" });

//             // update state with new items
//             const newItems = { ...items };
//             setItems(newItems);
//             setLoading(false);
//         }, 1000);
//     };

//     const loadItemsForMonth = (month) => {
//         const { year, month: monthNumber } = month;

//         // only load items for the current month
//         if (monthNumber === date.getMonth() + 1) {
//             const newItems = { ...items };
//             const dateString = `${year}-${monthNumber.toString().padStart(2, '0')}`;

//             // add custom event for the current month
//             if (!newItems[dateString]) {
//                 newItems[dateString] = [];
//             }

//             newItems[dateString] = [{ name: 'My Custom Event', time: '10:00 AM', location: 'San Francisco, CA' }];
//             setItems(newItems);
//         }
//     };

//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity style={styles.item}>
//                 <Card>
//                     <Card.Content>
//                         <View>
//                             <Text style={styles.itemText}>{item.name}</Text>
//                             <Text style={styles.itemText}>{item.time}</Text>
//                             <Text style={styles.itemText}>{item.location}</Text>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     }
//     return (
//         <View style={styles.container}>
//             <Agenda
//                 minDate={"2022-09-01"}
//                 items={items}
//                 loadItemsForMonth={loadItems}
//                 selected={selected}
//                 renderItem={renderItem}
//                 renderEmptyDate={() => <View style={styles.emptyDate} />}
//             />
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     item: {
//         flex: 1,
//         borderRadius: 5,
//         padding: 10,
//         marginRight: 10,
//         marginTop: 17
//     },
//     emptyDate: {
//         height: 15,
//         flex: 1,
//         paddingTop: 30
//     },
//     itemContent: {
//         flexDirection: 'column',
//         alignItems: 'flex-start'
//     },
//     itemName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5
//     },
//     itemDetails: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     itemTime: {
//         marginRight: 10,
//         fontSize: 14
//     },
//     itemLocation: {
//         fontSize: 14
//     }
// });


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';

// export default function Calendar() {

//     const calendarTheme = {
//         backgroundColor: '#ffffff',
//         calendarBackground: '#ffffff',
//         textSectionTitleColor: 'black',
//         selectedDayBackgroundColor: 'lightgreen',
//         selectedDayTextColor: 'black',
//         todayTextColor: 'lightgreen',
//         dayTextColor: '#2d4150',
//         textDisabledColor: '#d9e1e8',
//         dotColor: '#00adf5',
//         selectedDotColor: '#ffffff',
//         monthTextColor: 'black',
//         indicatorColor: 'blue',
//         textDayFontWeight: '300',
//         textMonthFontWeight: 'bold',
//         textDayHeaderFontWeight: '300',
//         textDayFontSize: 16,
//         textMonthFontSize: 16,
//         textDayHeaderFontSize: 16
//     };
//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity>
//                 <Card>
//                     <Card.Content>
//                         <Text>{item.name}</Text>
//                         <Text>{item.time}</Text>
//                         <Text>{item.location}</Text>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     };

//     const renderEmptyDate = () => {
//         return (
//             <View style={styles.emptyDate}>
//                 <Text style={styles.emptyDateText}>
//                     {date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
//                 </Text>
//                 <Text style={styles.emptyDateMessage}>No events scheduled for this day</Text>
//             </View>
//         );
//     };


//     return (
//         <Agenda
//             items={{
//                 '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//                 '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//                 '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],

//             }}
//             loadItemsForMonth={(month) => console.log('trigger items loading', month)}
//             onCalendarToggled={(calendarOpened) => console.log(calendarOpened)}
//             onDayPress={(day) => console.log('day pressed', day)}
//             onDayChange={(day) => console.log('day changed', day)}
//             renderItem={renderItem}
//             renderEmptyDate={renderEmptyDate}
//             theme={calendarTheme}
//             minDate={'2023-03-06'}
//             maxDate={'2023-03-08'}


//         />

//     );
// }




// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

// export default function Calendar() {
//     const [items, setItems] = React.useState({});
//     const [date, setDate] = React.useState(new Date());
//     const today = timeToString(date);
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     const minDate = timeToString(yesterday);
//     const [selected, setSelected] = React.useState(Date.now());


//     const generateDatesObject = (startDate, endDate) => {
//         const dates = {};
//         const currentDate = new Date(startDate);
//         while (currentDate <= endDate) {
//             const dateString = timeToString(currentDate);
//             dates[dateString] = [];
//             currentDate.setDate(currentDate.getDate() + 1);
//         }
//         return dates;
//     };

//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity style={styles.item}>
//                 <Card>
//                     <Card.Content>
//                         <View style={styles.itemContent}>
//                             <Text style={styles.itemName}>{item.name}</Text>
//                             <View style={styles.itemDetails}>
//                                 <Text style={styles.itemTime}>{item.time}</Text>
//                                 <Text style={styles.itemLocation}>{item.location}</Text>
//                             </View>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     }

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

//             // update state with new items
//             const newItems = { ...items };

//             setItems(newItems);
//             setLoading(false);
//         }, 1000);
//     };

//     let item1 = {
//         '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//     }

//     return (
//         <View style={styles.container}>
//             <Agenda
//                 minDate={"2022-09-01"}
//                 items={item1}
//                 renderItem={renderItem}
//                 selected={selected}
//                 loadItemsForMonth={loadItems}
//                 rowHasChanged={(r1, r2) => {
//                     return r1.name !== r2.name;
//                 }}
//                 renderEmptyDate={() => {
//                     return (
//                         <View style={styles.emptyDate}>
//                         </View>
//                     );
//                 }}
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
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

// export default function Calendar() {
//     const [items, setItems] = useState({
//         '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-12': [{ name: 'Scheduling Meeting', time: '8:00 - 9:00 PM', location: "Virtual" }],
//         '2023-03-20': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-03-28': [{ name: 'Picture Day', time: 'All Day', location: "LHS Main Gym" }],
//         '2023-04-01': [{ name: 'Spring Break Begins', time: 'All Day', location: "Have a Good Break!" }],
//         '2023-04-05': [{ name: 'Spring Break Ends', time: 'All Day', location: "Welcome Back!" }],
//         '2023-04-06': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-04-08': [{ name: 'SAT', time: '8:00 AM', location: "LHS" }],
//         '2023-04-16': [{ name: 'Board of Ed. Meeting', time: '8:00 - 9:15 PM', location: "Board of Ed. Building" }],
//         '2023-04-22': [{ name: 'Senior Games Meeting', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
//         '2023-04-23': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-05-01': [{ name: 'Senior Games Begins', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
//         '2023-05-08': [{ name: 'Finalize Schedules', time: '3:00 PM', location: "LHS" }],
//         '2023-05-10': [{ name: 'Senior Awards Night', time: '7:00 PM', location: "LHS Auditorium" }],
//         '2023-05-11': [{ name: 'Senior Prom', time: '7:00 - 11:00 PM', location: "The Grand" }],
//         '2023-05-12': [{ name: 'Senior Breakfast', time: '8:00 - 9:00 AM', location: "LHS Cafeteria" }],
//         '2023-06-01': [{ name: 'Senior Trip', time: 'All Day', location: "Washington, D.C." }],
//         '2023-06-24': [{ name: 'Graduation', time: '10:30 AM', location: "LHS Auditorium" }],
//     });
//     const [date, setDate] = useState(new Date());
//     const [loading, setLoading] = useState(true);
//     const [eventsLoaded, setEventsLoaded] = useState(false);
//     const [selectedDate, setSelectedDate] = useState('');

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



//             // update state with new items
//             const newItems = { ...items };
//             setItems(newItems);
//             setLoading(false);
//         }, 1000);
//     };

//     useEffect(() => {
//         loadItemsForMonth({ year: date.getFullYear(), month: date.getMonth() + 1 });
//     }, [date]);

//     const loadItemsForMonth = (month) => {
//         const { year, month: monthNumber } = month;

//         // only load items for the current month
//         if (monthNumber === date.getMonth() + 1) {
//             const newItems = { ...items };
//             const dateString = `${year}-${monthNumber.toString().padStart(2, '0')}`;

//             // add custom event for the current month if it hasn't been added before
//             if (!eventsLoaded && !newItems[dateString]) {
//                 newItems[dateString] = [];
//                 newItems[dateString].push({ name: 'My Custom Event', time: '10:00 AM', location: 'San Francisco, CA' });
//                 newItems[dateString].push({ name: 'My Custom Event 2', time: '11:00 AM', location: 'San Francisco, CA' });
//                 setItems(newItems);
//                 setEventsLoaded(true);
//             }
//         }
//     };

//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity style={styles.item}>
//                 <Card>
//                     <Card.Content>
//                         <View>
//                             <Text style={styles.itemEvent}>Event:
//                                 <Text style={{ fontWeight: 'normal' }}>  {item.name}
//                                 </Text>
//                             </Text>
//                             <Text style={styles.itemHour}>Time:
//                                 <Text style={{ fontWeight: 'normal' }}>  {item.time}
//                                 </Text>
//                             </Text>
//                             <Text style={styles.itemLocation}>Location:
//                                 <Text style={{ fontWeight: 'normal' }}> {item.location}
//                                 </Text>
//                             </Text>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     };


//     const onDayPress = (day) => {
//         setSelectedDate(day.dateString);
//         loadItems(day);
//     };




//     return (
//         <View style={styles.container}>
//             <Agenda
//                 items={items}
//                 loadItemsForMonth={loadItemsForMonth}
//                 selected={selected}
//                 onDayPress={onDayPress}
//                 renderItem={renderItem}
//                 renderEmptyData={() => {
//                     return <View />;
//                 }}
//                 rowHasChanged={(r1, r2) => {
//                     return r1.name !== r2.name;
//                 }}
//                 renderEmptyDate={() => {
//                     return (
//                         <View style={styles.emptyDate}>
//                         </View>
//                     );
//                 }}
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
//         paddingTop: 30,
//     },
//     itemHour: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,

//     },

//     itemEvent: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5
//     },

//     itemLocation: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5
//     }


// });




// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

// export default function Calendar() {
//     const [items, setItems] = useState({
//         '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
//         '2023-03-12': [{ name: 'Scheduling Meeting', time: '8:00 - 9:00 PM', location: "Virtual" }],
//         '2023-03-20': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-03-28': [{ name: 'Picture Day', time: 'All Day', location: "LHS Main Gym" }],
//         '2023-04-01': [{ name: 'Spring Break Begins', time: 'All Day', location: "Have a Good Break!" }],
//         '2023-04-05': [{ name: 'Spring Break Ends', time: 'All Day', location: "Welcome Back!" }],
//         '2023-04-06': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-04-08': [{ name: 'SAT', time: '8:00 AM', location: "LHS" }],
//         '2023-04-16': [{ name: 'Board of Ed. Meeting', time: '8:00 - 9:15 PM', location: "Board of Ed. Building" }],
//         '2023-04-22': [{ name: 'Senior Games Meeting', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
//         '2023-04-23': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
//         '2023-05-01': [{ name: 'Senior Games Begins', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
//         '2023-05-08': [{ name: 'Finalize Schedules', time: '3:00 PM', location: "LHS" }],
//         '2023-05-10': [{ name: 'Senior Awards Night', time: '7:00 PM', location: "LHS Auditorium" }],
//         '2023-05-11': [{ name: 'Senior Prom', time: '7:00 - 11:00 PM', location: "The Grand" }],
//         '2023-05-12': [{ name: 'Senior Breakfast', time: '8:00 - 9:00 AM', location: "LHS Cafeteria" }],
//         '2023-06-01': [{ name: 'Senior Trip', time: 'All Day', location: "Washington, D.C." }],
//         '2023-06-24': [{ name: 'Graduation', time: '10:30 AM', location: "LHS Auditorium" }],
//     });
//     const [date, setDate] = useState(new Date());
//     const [loading, setLoading] = useState(true);
//     const [eventsLoaded, setEventsLoaded] = useState(false);
//     const [selectedDate, setSelectedDate] = useState('');

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



//             // update state with new items
//             const newItems = { ...items };
//             setItems(newItems);
//             setLoading(false);
//         }, 1000);
//     };

//     useEffect(() => {
//         loadItemsForMonth({ year: date.getFullYear(), month: date.getMonth() + 1 });
//     }, [date]);

//     const loadItemsForMonth = (month) => {
//         const { year, month: monthNumber } = month;

//         // only load items for the current month
//         if (monthNumber === date.getMonth() + 1) {
//             const newItems = { ...items };
//             const dateString = `${year}-${monthNumber.toString().padStart(2, '0')}`;


//         }
//     };

//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity style={styles.item}>
//                 <Card>
//                     <Card.Content>
//                         <View>
//                             <Text style={styles.itemEvent}>Event:
//                                 <Text style={{ fontWeight: 'normal' }}>  {item.name}
//                                 </Text>
//                             </Text>
//                             <Text style={styles.itemHour}>Time:
//                                 <Text style={{ fontWeight: 'normal' }}>  {item.time}
//                                 </Text>
//                             </Text>
//                             <Text style={styles.itemLocation}>Location:
//                                 <Text style={{ fontWeight: 'normal' }}> {item.location}
//                                 </Text>
//                             </Text>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     };


//     const onDayPress = (day) => {
//         setSelectedDate(day.dateString);
//         loadItems(day);
//     };




//     return (
//         <View style={styles.container}>
//             <Agenda
//                 items={items}
//                 loadItemsForMonth={loadItemsForMonth}
//                 selected={selected}
//                 onDayPress={onDayPress}
//                 renderItem={renderItem}
//                 renderEmptyData={() => {
//                     return <View />;
//                 }}
//                 rowHasChanged={(r1, r2) => {
//                     return r1.name !== r2.name;
//                 }}
//                 renderEmptyDate={() => {
//                     return (
//                         <View style={styles.emptyDate}>
//                         </View>
//                     );
//                 }}
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
//         paddingTop: 30,
//     },
//     itemHour: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,

//     },

//     itemEvent: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5
//     },

//     itemLocation: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5
//     }


// });



import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const App = () => {
    const [items, setItems] = useState({
        '2023-03-06': [{ name: 'FBLA SLC Day 1', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
        '2023-03-07': [{ name: 'FBLA SLC Day 2', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
        '2023-03-08': [{ name: 'FBLA SLC Day 3', time: 'All Day', location: "Harrah's Resort Atlantic City" }],
        '2023-03-12': [{ name: 'Scheduling Meeting', time: '8:00 - 9:00 PM', location: "Virtual" }],
        '2023-03-20': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
        '2023-03-28': [{ name: 'Picture Day', time: 'All Day', location: "LHS Main Gym" }],
        '2023-04-01': [{ name: 'Spring Break Begins', time: 'All Day', location: "Have a Good Break!" }],
        '2023-04-05': [{ name: 'Spring Break Ends', time: 'All Day', location: "Welcome Back!" }],
        '2023-04-06': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
        '2023-04-08': [{ name: 'SAT', time: '8:00 AM', location: "LHS" }],
        '2023-04-16': [{ name: 'Board of Ed. Meeting', time: '8:00 - 9:15 PM', location: "Board of Ed. Building" }],
        '2023-04-22': [{ name: 'Senior Games Meeting', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
        '2023-04-23': [{ name: 'HSA Meeting', time: '6:00 - 7:15 PM', location: "Board of Ed. Building" }],
        '2023-05-01': [{ name: 'Senior Games Begins', time: '3:00 - 5:00 PM', location: "LHS Meeting" }],
        '2023-05-08': [{ name: 'Finalize Schedules', time: '3:00 PM', location: "LHS" }],
        '2023-05-10': [{ name: 'Senior Awards Night', time: '7:00 PM', location: "LHS Auditorium" }],
        '2023-05-11': [{ name: 'Senior Prom', time: '7:00 - 11:00 PM', location: "The Grand" }],
        '2023-05-12': [{ name: 'Senior Breakfast', time: '8:00 - 9:00 AM', location: "LHS Cafeteria" }],
        '2023-06-01': [{ name: 'Senior Trip', time: 'All Day', location: "Washington, D.C." }],
        '2023-06-24': [{ name: 'Graduation', time: '10:30 AM', location: "LHS Auditorium" }],
    });

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                }
            }
            const newItems = items;
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }


    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Card style={{ backgroundColor: 'white' }}>
                    <Card.Content>
                        <View>
                            <Text style={styles.itemEvent}>{item.name}</Text>
                            <Text style={styles.itemHour}>{item.time}</Text>
                            <Text style={styles.itemLocation}>{item.location}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    const today = new Date();

    return (
        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={today}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
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
    itemEvent: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    itemHour: {
        fontSize: 16,
        color: '#000',
    },
    itemLocation: {
        fontSize: 16,
        color: '#000',
    },

});

export default App;


// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';

// const timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
// }

// const App = () => {
//     const [items, setItems] = React.useState({});
//     const [today, setToday] = React.useState(new Date());

//     const loadItems = (day) => {

//         // initialize items object for each day on the calendar
//         for (let i = -15; i < 85; i++) {
//             const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//             const strTime = timeToString(time);
//             if (!items[strTime]) {
//                 items[strTime] = [];
//             }
//         }

//         // update state with new items
//         const newItems = { ...items };



//         setItems(newItems);
//     };


//     const renderItem = (item) => {
//         return (
//             <TouchableOpacity style={styles.item}>
//                 <Card>
//                     <Card.Content>
//                         <View>
//                             <Text>{item.name}</Text>
//                         </View>
//                     </Card.Content>
//                 </Card>
//             </TouchableOpacity>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Agenda
//                 items={items}
//                 loadItemsForMonth={loadItems}
//                 selected={today}
//                 refreshControl={null}
//                 showClosingKnob={true}
//                 refreshing={false}
//                 renderItem={renderItem}
//             />
//             <StatusBar />
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
// });

// export default App;


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




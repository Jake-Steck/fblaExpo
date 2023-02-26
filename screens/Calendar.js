
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

    const renderHeader = (date) => {
        const month = date.toString().split(' ')[1]; // extract the month from the date
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{month}</Text>
            </View>
        );
    }

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
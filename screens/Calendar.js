import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import axios from 'axios';

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



    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                }
            }

            if (!items["2023-02-10"]) {
                items["2023-02-10"] = [];
            }
            items["2023-02-10"].push({
                name: "Sporting Event",
            });

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

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('https://www.livingston.org/site/RSS.aspx?DomainID=667&ModuleInstanceID=2636&PageID=7219&PMIID=0');
    //         // parse the response data to extract the relevant information
    //         const events = parseResponseData(response.data);
    //         console.log(typeof response.data);



    //         // store the events in the component's state as key-value pairs, with the date as the key
    //         setItems(events);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const parseResponseData = (data) => {
    //     const events = {};
    //     data.forEach((event) => {
    //         const date = event.date;
    //         if (!events[date]) {
    //             events[date] = [];
    //         }
    //         events[date].push({
    //             name: event.name,
    //         });
    //     });
    //     return events;
    // };




    // React.useEffect(() => {

    //     fetchData();
    // }, []);

    return (
        <View style={styles.container}>
            <Agenda
                minDate={"2022-09-01"}
                items={items}
                loadItemsForMonth={loadItems}
                selected={selected}
                renderItem={renderItem}
                renderEmptyDate={() => <View style={styles.emptyDate} />}
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
    }
});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import tw from 'tailwind-react-native-classnames';

export default function Header() {
    const [temp, setTemp] = useState();
    var key = "f908c935c047b03ebb81e5e19bb32147";
    var zip = "07039";
    var country = "us"
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            setTemp(Math.round(data.main.temp))
        })

    var hours = new Date().getHours();
    var timeOfDay = "";
    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }
    console.log(timeOfDay);

    return (
        <>
            <Image source={require('../assets/imgs/header.png')} style={tw`absolute w-full top-0 h-96 z-0 `} />
            {/* <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 32 }}>Good {timeOfDay}</Text> */}
            <Text style={tw`text-xl absolute top-28 left-10`}>Good {timeOfDay}</Text>
            <Image source={require('../assets/imgs/marker.png')} style={tw`absolute top-40 left-10 w-6 h-6`} />
            <Text style={tw`text-xl absolute top-40 left-16`}>Livingston High School</Text>
            <Image source={require('../assets/imgs/sun.png')} style={tw`absolute top-48 left-10 w-6 h-6`} />
            <Text style={tw`text-xl absolute top-48 left-16`}>{temp}°F</Text>
        </>
    )
}
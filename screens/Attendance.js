import React, { useState, useEffect } from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component, Pressable, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerModal } from "react-native-modal-datetime-picker";


export default function Attenance() {

    const [name, setName] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Illness', value: 'Illness' },
        { label: 'Family Emergency', value: 'Family Emergency' },
        { label: 'Personal', value: 'Personal' },
        { label: 'Other (State Below)', value: 'Other' },
    ])
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleConfirm = (date) => {
        setStartDate(date);
        hideDatePicker();
    };
    const showDatePicker = () => {
        setShow(true);
    };
    const hideDatePicker = () => {
        setShow(false);
    };


    return (
        <View>
            <Attendance />
            <View style={{ height: '85%' }}>
                <View style={styles.container}>
                    <View style={{ borderRadius: 10, borderWidth: 2, width: "15%", marginLeft: '5%', marginTop: '5%', height: '12%', borderColor: 'transparent', backgroundColor: '#75D29B' }}>
                        <Ionicons name="md-person" size={'30%'} color="white" style={{ alignSelf: 'center', marginTop: '15%', position: 'absolute' }} />
                    </View>
                    <View style={{ position: 'absolute', marginLeft: '23%', marginTop: '5%', height: '12%', width: '80%' }}>
                        <Text style={{ fontFamily: 'OpenSans_300Light', color: '#B7B7B7', fontSize: '12rem' }}>Full Name</Text>
                    </View>
                    <View style={styles.name}>
                        <TextInput
                            style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#3D3D3D' }}
                            placeholder="Last, First Name"
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                    </View>
                    <View style={styles.line} />
                    <View style={{ borderRadius: 10, borderWidth: 2, width: "15%", marginLeft: '5%', marginTop: '5%', height: '12%', borderColor: 'transparent', backgroundColor: '#75D29B' }}>
                        <Ionicons name="md-albums" size={'30%'} color="white" style={{ alignSelf: 'center', marginTop: '15%', position: 'absolute' }} />
                    </View>
                    <View style={{ position: 'absolute', marginLeft: '23%', marginTop: '29%', height: '12%', width: '80%' }}>
                        <Text style={{ fontFamily: 'OpenSans_300Light', color: '#B7B7B7', fontSize: '12rem' }}>Reason for Absense</Text>
                    </View>
                    <View>
                        <DropDownPicker
                            zIndex={1000}
                            listMode="FLATLIST"
                            dropDownDirection='TOP'
                            placeholder='Select a Reason'
                            placeholderStyle={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#B7B7B7' }}
                            items={items}
                            value={value}
                            open={open}
                            showArrowIcon={false}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            listItemLabelStyle={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: 'white' }}
                            style={styles.select}
                            textStyle={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#B7B7B7' }}
                            dropDownContainerStyle={{
                                backgroundColor: '#75D29B', width: '60%', marginLeft: '20.5%', marginTop: '-10.5%', borderRadius: 10, borderWidth: 8, borderColor: 'transparent'
                            }}
                        />

                    </View>
                    <View style={styles.line} />
                    <View style={{ borderRadius: 10, borderWidth: 2, width: "15%", marginLeft: '5%', marginTop: '5%', height: '12%', borderColor: 'transparent', backgroundColor: '#75D29B' }}>
                        <MaterialIcons name="date-range" size={'30%'} color="white" style={{ alignSelf: 'center', marginTop: '15%', position: 'absolute' }} />
                    </View>
                    <View style={{ position: 'absolute', marginLeft: '23%', marginTop: '52%', height: '12%', width: '80%' }}>
                        <Text style={{ fontFamily: 'OpenSans_300Light', color: '#B7B7B7', fontSize: '12rem' }}>Date of Absense</Text>
                    </View>

                    <View style={{ position: 'absolute', marginTop: '58%', height: '12%', width: '80%' }}>
                        {/* <DateTimePicker
                            value={startDate}
                            mode={'date'}
                            display="calendar"
                            style={styles.calButton}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || startDate;
                                setStartDate(currentDate);
                            }}
                            minimumDate={new Date()}
                            accentColor='#75D29B'
                            placeholderText='Select a Date'
                            placeholderTextColor='#B7B7B7'
                        /> */}
                        <DateTimePickerModal
                            isVisible={show}
                            mode="date"
                            display="inline"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            buttonTextColorIOS='#75D29B'
                            minimumDate={new Date()}
                            style={{ backgroundColor: 'transparent' }}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || startDate;
                                setStartDate(currentDate);
                            }}
                            accentColor='#75D29B'
                            placeholderText='Select a Date'
                            placeholderTextColor='#B7B7B7'

                        />
                        <TouchableOpacity onPress={showDatePicker} style={styles.calButton}>
                            <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#B7B7B7' }}>{startDate.toDateString()}</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.line} />


                </View >
                <View />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '20%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: "90%",
        alignSelf: 'center',
        marginTop: '60%',
    },
    line: {
        position: 'relative',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        paddingTop: '5%'
    },
    name: {
        position: 'absolute',
        marginLeft: '23%',
        marginTop: '10%',

    },
    select: {
        position: 'absolute',
        marginLeft: '20.5%',
        width: '50%',
        marginTop: '-10.5%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        fontFamily: 'OpenSans_600SemiBold',
        zIndex: 1000,
    },
    calButton: {
        position: 'absolute',
        marginLeft: '29.5%',
        width: '50%',
        marginTop: '-2%',
    }


});


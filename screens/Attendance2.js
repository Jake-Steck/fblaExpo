import React, { useState } from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, Pressable, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DateTimePickerModal } from "react-native-modal-datetime-picker";


export default function Attenance() {

    var dateText = "Select a Date";
    const [name, setName] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [startDate, setStartDate] = useState(null);
    const [show, setShow] = useState(false);
    const [reason, setReason] = useState('');


    const handleDateSelect = (date) => {
        if (startDate != null) {
            dateText = startDate.toString();
        }
    };

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
        <KeyboardAvoidingView style={{ height: '80%' }} behavior="height">
            <Attendance />
            <Text style={styles.AttendanceText}>LHS Attendance</Text>
            <View style={{ height: '80%' }}>
                <View style={styles.container}>
                    {/* Name Input */}
                    <View style={styles.nameContainer}>
                        <View style={styles.box}>
                            <Ionicons name="md-person" size={'30%'} color="white" style={{ alignSelf: 'center', marginTop: '15%' }} />
                        </View>
                        <Text style={styles.header}>Full Name<Text style={{ color: 'red' }}>*</Text></Text>

                        <View style={styles.input}>
                            <TextInput
                                style={styles.placeholder}
                                placeholder="Last, First Name"
                                onChangeText={text => setName(text)}
                                value={name}
                            />
                        </View>
                    </View>

                    <View style={styles.gap}></View>

                    {/* Reason Input */}

                    <View style={styles.reasonContainer}>
                        <View style={styles.box}>
                            <Ionicons
                                name='md-albums'
                                size={'30%'}
                                color="white"
                                style={{ alignSelf: 'center', marginTop: '15%' }}
                            />
                        </View>
                        <Text style={styles.header}>Reason<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.placeholder}
                                placeholder="Reason"
                                onChangeText={text => setReason(text)}
                                value={reason}
                            />
                        </View>
                        <View>

                        </View>
                    </View>

                    <View style={styles.gap}></View>

                    {/* Date Input */}

                    <View style={styles.calContainer}>
                        <View style={styles.calBox}>
                            <Ionicons
                                name='md-calendar'
                                size={'30%'}
                                color="white"
                                style={{ alignSelf: 'center', marginTop: '15%' }}
                            />
                        </View>
                        <Text style={styles.header}>Date<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.dateClick}>
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
                                    handleDateSelect(currentDate);
                                }}
                                accentColor='#75D29B'
                            />
                            <Pressable onPress={showDatePicker}>
                                <Text style={styles.placeholder}>{startDate ? startDate.toDateString() : 'Select a Date'}</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.gap}></View>

                    {/* Comment Input */}

                    <View style={styles.commentContainer}>
                        <View style={styles.commentBox}>
                            <Ionicons
                                name='md-chatbubbles'
                                size={'30%'}
                                color="white"
                                style={{ alignSelf: 'center', marginTop: '15%' }}
                            />
                        </View>
                        <Text style={styles.header}>Comments</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.placeholder}
                                placeholder="Comments"
                                onChangeText={(text) => setComments(text)}
                                value={comments}
                                multiline={true}
                                onSubmitEditing={() => Keyboard.dismiss()}
                            />
                        </View>


                    </View>


                </View>
            </View >
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({

    AttendanceText: {
        fontFamily: 'OpenSans_700Bold',
        position: 'relative',
        top: '20%',
        marginLeft: '5%',
        fontSize: '29rem',
        color: '#3D3D3D'
    },

    container: {
        flex: 1,
        top: '12%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gap: {
        paddingBottom: '5%',
    },

    nameContainer: {
        position: 'relative',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: "90%",
        alignSelf: 'center',
        height: '14%'
    },

    box: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        marginTop: '5%',
        height: '40%',
        borderColor: 'transparent',
        backgroundColor: '#75D29B',
    },

    input: {
        position: 'absolute',
        marginLeft: '23%',
        marginTop: '10%',
        width: '60%',
    },

    reasonContainer: {
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: "90%",
        alignSelf: 'center',
        height: '14%'
    },

    header: {
        marginLeft: '23%',
        marginTop: '5%',
        fontFamily: 'OpenSans_300Light',
        color: '#B7B7B7',
        fontSize: '12rem'
    },

    placeholder: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: '20rem',
        color: '#B7B7B7',
    },

    calContainer: {
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: "90%",
        alignSelf: 'center',
        height: '14%'
    },

    calBox: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        marginTop: '5%',
        height: '40%',
        borderColor: 'transparent',
        backgroundColor: '#75D29B',
    },

    dateClick: {
        position: 'absolute',
        marginLeft: '23%',
        marginTop: '10%',
        width: '60%',
    },

    commentContainer: {
        position: 'relative',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: "90%",
        alignSelf: 'center',
        height: '14%'
    },

    commentBox: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        marginTop: '5%',
        height: '40%',
        borderColor: 'transparent',
        backgroundColor: '#75D29B',
    },



});

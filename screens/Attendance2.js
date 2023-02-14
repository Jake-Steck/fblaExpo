import React, { useState } from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, Pressable, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import { app } from '../firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';


export default function Attenance() {
    const db = getFirestore(app);

    var dateText = '';
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

    const handleSubmission = () => {
        if (name == '' || reason == '' || startDate == null) {
            alert('Please fill out all required fields');
        } else {
            const formattedDate = startDate.toDateString();
            addDoc(collection(db, "attendance"), {
                name: name,
                reason: reason,
                date: formattedDate,
                comments: comments
            }).then(() => {
                alert('Attendance Submitted');
                setName('');
                setReason('');
                setStartDate(null);
                setComments('');
                Keyboard.dismiss();
            }).catch((error) => {
                alert(error);
            });
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
        <KeyboardAvoidingView style={{ height: '70%' }} behavior="position" >
            <Attendance />
            <Text style={styles.AttendanceText}>LHS Attendance</Text>
            <View style={{ height: '80%' }}>
                <View style={styles.container}>
                    {/* Name Input */}
                    <View style={styles.nameContainer}>
                        <View style={styles.box}>
                            <Ionicons
                                name="md-person"
                                size={'30%'}
                                color="white"
                                style={{ alignSelf: 'center', marginTop: '15%' }}
                            />
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
                                themeVariant="light"
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
                                style={[styles.placeholder, { top: '-10%' }]}
                                placeholder="Comments"
                                onChangeText={(text) => setComments(text)}
                                value={comments}
                                numberOfLines={4}
                                multiline={true}
                                selectTextOnFocus={true}
                                onSubmitEditing={() => Keyboard.dismiss()}
                            />
                        </View>
                    </View>

                    {/* Submit Button */}

                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#40AD6C'
                                : '#75D29B'
                        },
                        styles.submitButton]}
                        onPress={handleSubmission}>
                        <Text style={styles.submitText}>Submit</Text>
                    </Pressable>

                </View>
            </View >
        </KeyboardAvoidingView >
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
        top: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gap: {
        paddingBottom: '5%',
    },

    nameContainer: {
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        width: "90%",
        alignSelf: 'center',
        height: '18%'
    },

    box: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        top: '22%',
        height: '65%',
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
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        width: "90%",
        alignSelf: 'center',
        height: '18%'
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
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        width: "90%",
        alignSelf: 'center',
        height: '18%'
    },

    calBox: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        top: '22%',
        height: '65%',
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
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        width: "90%",
        alignSelf: 'center',
        height: '38%'
    },

    commentBox: {
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 2,
        width: "10%",
        marginLeft: '5%',
        top: '7%',
        height: '28%',
        borderColor: 'transparent',
        backgroundColor: '#75D29B',
    },

    submitButton: {
        position: 'relative',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        width: "90%",
        alignSelf: 'center',
        height: '10%',
        top: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: '20rem',
        color: 'white',
    },

});


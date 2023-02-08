import React from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component, Pressable, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Attenance() {

    const [name, setName] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Illness', value: 'Illness' },
        { label: 'Family Emergency', value: 'Family Emergency' },
        { label: 'Personal', value: 'Personal' },
        { label: 'Other (State Below)', value: 'Other' },
    ]);



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
                            placeholder='Select a Reason'
                            placeholderStyle={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#B7B7B7' }}
                            items={items}
                            value={value}
                            open={open}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={styles.select}
                            textStyle={{ fontFamily: 'OpenSans_600SemiBold', fontSize: '20rem', color: '#B7B7B7' }}
                            dropDownContainerStyle={{ backgroundColor: '#e7e7e7', borderWidth: 0, width: '50%', marginLeft: '20.5%', marginTop: '-11%', borderWidth: 0, borderRadius: 10, paddingBottom: '5%' }}
                        />
                    </View>
                    <View style={styles.line} />
                    <View style={{ borderRadius: 10, borderWidth: 2, width: "15%", marginLeft: '5%', marginTop: '5%', height: '12%', borderColor: 'transparent', backgroundColor: '#75D29B' }}>
                        <MaterialIcons name="date-range" size={'30%'} color="white" style={{ alignSelf: 'center', marginTop: '15%', position: 'absolute' }} />
                    </View>
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
    }
});


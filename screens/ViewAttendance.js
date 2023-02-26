// import React, { useState, useEffect } from 'react';
// import Attendance from '../components/AttendanceHeader';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component, Pressable, TextInput, Alert } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { auth, db } from '../firebaseConfig';
// import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';

// export default function Attendance1() {
//     const navigation = useNavigation();
//     const [absentUsers, setAbsentUsers] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, 'attendance'), (querySnapshot) => {
//             const attendanceArray = [];
//             querySnapshot.forEach((doc) => {
//                 const data = doc.data();
//                 attendanceArray.push(data);
//             });
//             setAbsentUsers(attendanceArray.filter(user => !user.absent));
//         });
//         return unsubscribe;
//     }, []);

//     const handleUserClick = (user) => {
//         setSelectedUser(user);
//     };


//     const renderComments = () => {
//         if (selectedUser) {
//             return (
//                 Alert.alert("Comments for " + selectedUser.name, selectedUser.comments)
//             )
//         }
//     };

//     return (
//         <>
//             <Attendance />
//             <View>
//                 <MaterialIcons name="arrow-back-ios" size={24} color="black" style={{ position: 'absolute', marginTop: '15%', marginLeft: '5%' }} onPress={() => navigation.goBack()} />

//                 <Text style={styles.text}>View Attendance</Text>


//             </View>
//             <View style={styles.table}>
//                 <View style={styles.tableRow}>
//                     <View style={[styles.tableCell, { flex: 1.5 }]}>
//                         <Text style={styles.tableHeader}>Name</Text>
//                     </View>
//                     <View style={[styles.tableCell, { flex: 1 }]}>
//                         <Text style={styles.tableHeader}>Date</Text>
//                     </View>
//                     <View style={[styles.tableCell, { flex: 1 }]}>
//                         <Text style={styles.tableHeader}>Reason</Text>
//                     </View>
//                     <View style={[styles.tableCell, { flex: 1 }]}>
//                         <Text style={styles.tableHeader}>Note(s)</Text>
//                     </View>
//                 </View>
//                 {absentUsers.map((user) => (
//                     <Pressable key={user.id} onPress={() => handleUserClick(user)}>
//                         <View style={styles.tableRow}>
//                             <View style={[styles.tableCell, { flex: 1.5 }]}>
//                                 <Text style={styles.tableData}>{user.name}</Text>
//                             </View>
//                             <View style={[styles.tableCell, { flex: 1 }]}>
//                                 <Text style={styles.tableData}>{user.date}</Text>
//                             </View>
//                             <View style={[styles.tableCell, { flex: 1 }]}>
//                                 <Text style={styles.tableData}>{user.reason}</Text>
//                             </View>
//                             <View style={[styles.tableCell, { flex: 1, alignItems: 'center' }]}>
//                                 <MaterialIcons name="comment" size={30} color="black" onPress={() => renderComments()} />
//                             </View>
//                         </View>
//                     </Pressable>
//                 ))}
//             </View>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     tableContainer: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         marginBottom: 20,
//     },
//     header: {
//         backgroundColor: "#f0f0f0",
//         fontWeight: "bold",
//         padding: 10,
//     },
//     row: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#ccc",
//         padding: 10,
//     },
//     cell: {
//         flex: 1,
//         textAlign: "center",
//     },
//     absentName: {
//         fontWeight: "bold",
//         textDecorationLine: "underline",
//         color: "#ff0000",
//     },
//     detailsContainer: {
//         backgroundColor: "#f0f0f0",
//         padding: 10,
//     },
//     detailsHeader: {
//         fontWeight: "bold",
//         marginBottom: 5,
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#000',
//         left: '5%',
//         color: '#3D3D3D',
//         marginTop: '43%',
//         marginBottom: '10%'
//     },

//     table: {
//         marginTop: 20,
//         marginLeft: 20,
//         marginRight: 20,
//         marginBottom: 20,
//         borderWidth: 1,
//         borderColor: "#ccc",
//         marginBottom: 20,
//         borderRadius: 10,
//     },
//     tableRow: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#ccc",
//         padding: 10,
//     },
//     tableCell: {
//         flex: 1,
//         textAlign: "center",
//     },
//     tableHeader: {
//         fontWeight: "bold",
//         padding: 10,
//     },
//     tableData: {
//         padding: 10,
//     },
// });

import React, { useState, useEffect } from 'react';
import Attendance from '../components/AttendanceHeader';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Component, Pressable, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebaseConfig';
import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function Attendance1() {
    const navigation = useNavigation();
    const [absentUsers, setAbsentUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userComment, setUserComment] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'attendance'), (querySnapshot) => {
            const attendanceArray = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                attendanceArray.push(data);
                console.log(data)
            });
            setAbsentUsers(attendanceArray.filter(user => !user.absent));
        });
        return unsubscribe;
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setUserComment(user.comments);
    };

    return (
        <>
            <Attendance />
            <View>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" style={{ position: 'absolute', marginTop: '15%', marginLeft: '5%' }} onPress={() => navigation.goBack()} />

                <Text style={styles.text}>View Attendance</Text>
            </View>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCell, { flex: 1.5 }]}>
                        <Text style={styles.tableHeader}>Name</Text>
                    </View>
                    <View style={[styles.tableCell, { flex: 1 }]}>
                        <Text style={styles.tableHeader}>Date</Text>
                    </View>
                    <View style={[styles.tableCell, { flex: 1 }]}>
                        <Text style={styles.tableHeader}>Reason</Text>
                    </View>
                    <View style={[styles.tableCell, { flex: 1 }]}>
                        <Text style={styles.tableHeader}>Note(s)</Text>
                    </View>
                </View>
                {absentUsers.map((user) => (
                    <Pressable key={user.id} onPress={() => handleUserClick(user)}>
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCell, { flex: 1.5 }]}>
                                <Text style={styles.tableData}>{user.name}</Text>
                            </View>
                            <View style={[styles.tableCell, { flex: 1 }]}>
                                <Text style={styles.tableData}>{user.date}</Text>
                            </View>
                            <View style={[styles.tableCell, { flex: 1 }]}>
                                <Text style={styles.tableData}>{user.reason}</Text>
                            </View>
                            <View style={[styles.tableCell, { flex: 1, alignItems: 'center' }]}>
                                <MaterialIcons
                                    name="comment"
                                    size={30}
                                    color="black"
                                    onPress={() =>
                                        Alert.alert("Comments for " + user.name, user.comments)}
                                />
                            </View>
                        </View>
                    </Pressable>

                ))}
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
    },
    header: {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold",
        padding: 10,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
    },
    cell: {
        flex: 1,
        textAlign: "center",
    },
    absentName: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#ff0000",
    },
    detailsContainer: {
        backgroundColor: "#f0f0f0",
        padding: 10,
    },
    detailsHeader: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        left: '5%',
        color: '#3D3D3D',
        marginTop: '43%',
        marginBottom: '10%'
    },

    table: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
        borderRadius: 10,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
    },
    tableCell: {
        flex: 1,
        textAlign: "center",
    },
    tableHeader: {
        fontWeight: "bold",
        padding: 10,
    },
    tableData: {
        padding: 10,
    },
});
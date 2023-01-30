import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';



export default function ImpEvents() {
    const slides = ['https://patch.com/img/cdn20/users/22844250/20200421/014148/styles/patch_image/public/livingston-highschool-schoolpr___21133742706.jpg']

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: '70%', paddingTop: 10, marginRight: 40 }}>
            <Text style={{ marginRight: 60 }}>Important Events</Text>
            <Image
                source={{
                    uri: slides[0]
                }}
                style={{ width: 300, height: 175, borderRadius: 10, }}
            />
        </View>
    )
}

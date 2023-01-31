import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';



export default function ImpEvents() {
    const slides = ['https://patch.com/img/cdn20/users/22844250/20200421/014148/styles/patch_image/public/livingston-highschool-schoolpr___21133742706.jpg', 'https://patch.com/img/cdn/users/22844250/2015/05/raw/20150555523bf088bd6.jpg', 'https://patch.com/img/cdn/users/22821264/2014/08/raw/5400e8ea02f3c.png']

    return (
        <>
            <Text style={{ left: 40, fontFamily: 'OpenSans_700Bold', marginTop: '70%', fontSize: 25, color: "#3D3D3D" }}>Important Information</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: 7, paddingLeft: 40 }} snapToInterval={370} decelerationRate={0}>
                <Image
                    source={{
                        uri: slides[0]
                    }}
                    style={{ width: 350, height: 175, borderRadius: 10, }}
                />
                <Image
                    source={{
                        uri: slides[1]
                    }}
                    style={{ width: 350, height: 175, borderRadius: 10, marginLeft: 20 }}
                />
                <Image
                    source={{
                        uri: slides[2]
                    }}
                    style={{ width: 350, height: 175, borderRadius: 10, marginLeft: 20 }}
                />
                <View
                    style={{ width: 50, height: 175, borderRadius: 10, marginLeft: 20 }}
                />
            </ScrollView>
        </>
    )
}

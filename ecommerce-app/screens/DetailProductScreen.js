import React, { useLayoutEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {Button} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


const DetailProductScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Detail Product",
            headerTitleStyle: { color: "blue" },
            headerRight: () => (
                <View style={{ marginRight: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Ionicons name="cart-outline" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <View>
                <Image
                    resizeMode="cover"
                    style={{
                        paddingTop: 5,
                        right: 0,
                        height: 200,
                        width: "98%"
                    }}
                    source={{
                        uri: 'https://res.cloudinary.com/http-codingcampus-pythonanywhere-com/image/upload/v1615399961/test/lwmgl7wiob0ptb8wrfq5.png'
                    }}
                />
            </View>
            <View style={styles.detail_sec}>
                <View style={styles.subDetail1}>
                <Text>TITLE  : Ashutosh kumar maurya</Text>
                </View>
                <View style={styles.subDetail2}>
                    <Text>PRICE  : $234</Text>
                </View>
                <View style={styles.subDetail3}>
                    <Text>DESCRIPTION  : Ashutosh kumar maurya kaha tum  chale gayr chitthi na koi sandes jane Ashutosh kumar maurya kaha tum  chale gayr chitthi na koi sandes jane Ashutosh kumar maurya kaha tum  chale gayr chitthi na koi sandes jane</Text>
                </View>
            </View>
            <Button containerStyle={styles.button} title="Add To Cart" />
        </View>
    )
}

export default DetailProductScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 2,
    },
    detail_sec: {
        flex: 1,
        paddingTop: 5,
    },
    subDetail1: {
        width: "92%",
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#dcdcdc",
    },
    subDetail2: {
        width: "92%",
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#f0ead6",
    },
    subDetail3: {
        width: "92%",
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#ffe4e1",
    },
    button : {
        marginLeft : 50,
        width : 200,
        marginTop : 10
    }
})
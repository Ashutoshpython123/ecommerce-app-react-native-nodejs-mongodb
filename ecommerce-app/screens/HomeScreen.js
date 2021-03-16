import React, { useLayoutEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    FlatList
} from 'react-native'


import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import ProductItem from '../components/ProductItem'

const Home = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "SHOP PRODUCTS",
            headerTitleStyle: { color: "blue" },
            headerLeft: () => (
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{marginRight : 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Ionicons name="cart-outline" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])
    return (
        <SafeAreaView>
                <View style={styles.container}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "flex-start",
        width : "100%",
        marginTop : 5,
        marginLeft : "auto",
        marginRight : "auto"
    },
});
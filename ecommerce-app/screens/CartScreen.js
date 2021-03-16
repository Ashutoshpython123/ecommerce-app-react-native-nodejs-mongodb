import React, {useLayoutEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const CartScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Cart",
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
        <View>
            <Text>this is cart screen</Text>
        </View>
    )
}

export default CartScreen

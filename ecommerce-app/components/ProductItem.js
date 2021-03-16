import React, {useLayoutEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProductItem = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')} style={styles.containe} activeOpacity={0.5}>
            <View>
                <Image
                    resizeMode="cover"
                    style={{
                        position: "absolute",
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
            <View style={styles.Image_pro}>
                <Text>Ashutosh</Text>
                <Text>$234</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    containe: {
        height: 250,
        width: 150,
        marginHorizontal: 4,
        marginTop: 5,
        marginBottom : 5,
        backgroundColor: "#F5F6CE"
    },

    Image_pro: {
        flex: 1,
        width: 150,
        marginLeft : 5,
        justifyContent: "flex-end",
        borderRadius: 10,
    }
})
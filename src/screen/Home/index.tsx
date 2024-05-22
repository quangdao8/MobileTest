import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation<any>()

    const handleDetail = () => {
        navigation.navigate("Detail")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center} >
                <Text style={styles.txtWelcome}>Chào mừng bạn đến với Skindex AI</Text>
                <TouchableOpacity
                    style={styles.btnDetail}
                    onPress={handleDetail}
                >
                    <Text style={styles.txtDetail}>Nhấn để xem tình trạng da của bạn</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    txtWelcome: {
        fontSize: 18,
        fontWeight: '700',
    },
    btnDetail: {
        marginTop: 20
    },
    txtDetail: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: "underline",
    }
})
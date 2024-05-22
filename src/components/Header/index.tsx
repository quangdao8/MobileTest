import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../theme/images'

const Header = ({ title }: { title: string }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
            <Image source={images.ic_back} style={styles.ic} resizeMode='contain' />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    ic: {
        width: 15,
        height: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5
    }
})
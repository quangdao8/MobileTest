import { View, Text, Image, StyleSheet, ImageProps, StyleProp, ViewStyle } from 'react-native'
import React, { memo } from 'react'
import { images } from '../../theme/images'

interface IContainerProps {
    title: string,
    children?: React.ReactNode,
    icon: ImageProps,
    style?: ViewStyle
}

const Container = (props: IContainerProps) => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.titleContainer}>
                <Image
                    source={props.icon}
                    style={styles.icon}
                    resizeMode='contain'
                />
                <Text style={styles.txtTitle}>{props.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                {props.children}
            </View>
        </View>
    )
}

export default memo(Container)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10
    },
    icon: {
        width: 20,
        height: 20
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#D8D6D5',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    txtTitle: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 5
    },
    contentContainer: {
        marginTop: 5
    }
})
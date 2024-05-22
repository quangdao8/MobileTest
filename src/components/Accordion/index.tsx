import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    LayoutAnimation,
    UIManager,
    Platform,
    Image
} from 'react-native';
import { images } from '../../theme/images';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface IAccordionItemProps {
    children: React.ReactNode,
    title: string,
    onPress: (id: number) => void,
    collapsed: boolean,
    id: number
}


const AccordionItem = (props: IAccordionItemProps) => {        
    const { collapsed = false, id, onPress, title, children } = props;
    const toggleItem = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress(id);
    }, [id, onPress]);

    const body = useMemo(() => (
        <View style={styles.accordBody}>{children}</View>
    ), [children]);
    

    return (
        <View style={[styles.accordContainer, { backgroundColor: collapsed ? '#EBEFFA' : '#FFF' }]}>
            <TouchableOpacity style={styles.accordHeader} onPress={toggleItem} activeOpacity={0.7}>
                <Text ellipsizeMode='tail' style={styles.accordTitle}>{props.title}</Text>
                <Image source={images.ic_down} style={[styles.iconDown, { transform: [{ rotate: collapsed ? '180deg' : '270deg' }] }]} />
            </TouchableOpacity>
            {collapsed && body}
        </View>
    );
}

export default memo(AccordionItem)

const styles = StyleSheet.create({
    accordContainer: {
        paddingVertical: 4,
        marginBottom: 10,
        borderRadius: 6,
        paddingHorizontal: 4
    },
    accordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    accordTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: "#000",
        flex: 1
    },
    accordBody: {
        padding: 10
    },
    iconDown: {
        width: 24,
        height: 24,
        tintColor: "#0C0C0D"
    }
});
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../../components/Container'
import Header from '../../components/Header'
import { images } from '../../theme/images'
import AccordionItem from '../../components/Accordion'
import { DATA_BETTER, DATA_WORSE } from '../../MockData/dummyData'
import ReadMore from '@fawazahmed/react-native-read-more'

const Detail = () => {
    const [idItemGood, setIdItemGood] = useState(0);
    const [idItemBad, setIdItemBad] = useState(0);


    const handlePressItemGood = useCallback((id: number) => {
        setIdItemGood(prevId => (prevId === id ? 0 : id));
    }, []);

    const handlePressItemBad = useCallback((id: number) => {
        setIdItemBad(prevId => (prevId === id ? 0 : id));
    }, []);

    const renderAccordionItemGood = useCallback((elm: any) => (
        <AccordionItem
            key={elm.id}
            id={elm.id}
            title={elm.title}
            collapsed={idItemGood === elm.id}
            onPress={handlePressItemGood}
        >
            <ReadMore
                numberOfLines={5}
                seeLessText='Thu gọn'
                seeMoreStyle={{ color: 'blue' }}
                seeLessStyle={{ color: 'blue' }}
                seeMoreText='Xem thêm'
                animate={true}
            >
                {elm.content}
            </ReadMore>
        </AccordionItem>
    ), [idItemGood, handlePressItemGood]);

    const renderAccordionItemBad = useCallback((elm: any) => (
        <AccordionItem
            key={elm.id}
            id={elm.id}
            title={elm.title}
            collapsed={idItemBad === elm.id}
            onPress={handlePressItemBad}
        >
            <ReadMore
                numberOfLines={5}
                seeLessText='Thu gọn'
                seeMoreStyle={{ color: 'blue' }}
                seeLessStyle={{ color: 'blue' }}
                seeMoreText='Xem thêm'
                animate={true}
            >
                {elm.content}
            </ReadMore>
        </AccordionItem>
    ), [idItemBad, handlePressItemBad]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Home' />
            <ScrollView style={styles.content}>
                <Container
                    icon={images.ic_done}
                    title='Tình trạng da tốt'
                >
                    {DATA_BETTER.map(renderAccordionItemGood)}
                </Container>
                <Container
                    icon={images.ic_wrong}
                    title='Tình trạng da chưa tốt'
                    style={{ marginTop: 20 }}
                >
                    {DATA_WORSE.map(renderAccordionItemBad)}
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F9'
    },
    content: {
        padding: 16
    }
})
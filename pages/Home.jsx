import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useCounter } from '../store/counterStore'

function Home() {
    const { count, inc, dec } = useCounter();
    return (
        <View style={styles.container} > <Text>{count}</Text>
            <Button title='inc' onPress={() => inc()} />
            <Button title='dec' onPress={() => dec()} />

        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
})
export default Home
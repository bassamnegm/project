import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function About() {
    return (
        <View style={styles.container} > <Text>About</Text></ View>
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
export default About
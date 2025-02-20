import { useState } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from "react-native"
const screen = Dimensions;
function Home() {
    const [count, setCount] = useState(0)
    console.log(screen.get('screen').width)
    function show() {
        // console.log("first")
        setCount(count + 1);
    }
    return (
        <View>
            <Text>{count}</Text>
            <Image style={{ width: 100, height: 100 }} source={require("../assets/favicon.png")} />
            <TouchableOpacity onPress={show}> <Text style={styles.but}>click Me </Text></TouchableOpacity>
            <Button title="save" />
        </View>
    )
}

const styles = StyleSheet.create({

    but: {
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white',
        padding: 20,
        width: 100,
        height: 60,
        borderRadius: 1
    }
})

export default Home
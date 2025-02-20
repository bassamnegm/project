import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native"
function List() {

    const arr = ["item 1", "item 2", "Item 3", "Item 4"]
    function render({ item }) {

        return <View style={styles.cont}>
            <Text>{item}</Text>
        </View>
    }
    return (
        <View style={{ height: 800, marginTop: 70 }}>
            {/* <ScrollView>

                {
                    arr.map((item) => {
                        return <View key={item} style={styles.cont}>
                            <Text>{item}</Text>
                        </View>
                    })
                }
            </ScrollView> */}
            <FlatList
                numColumns={2}
                data={arr}
                renderItem={render}
                keyExtractor={(item) => item}
            />


        </View>
    )
}

const styles = StyleSheet.create(({
    cont: {
        padding: 22,
        borderWidth: 3,
        margin: 10,
        width: 200,
        height: 200

    }
}))

export default List
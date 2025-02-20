import { Button, Text, View } from 'react-native'

function TodoItem(props) {
    function remove() {
        props.fun(props.index);
    }
    return (
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
            <Text>{props.item}</Text>
            <Button onPress={remove} title='delete' />

        </View>
    )
}

export default TodoItem
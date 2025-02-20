import { useEffect, useState } from "react"
import { Button, TextInput, View, Text, ScrollView } from "react-native"
import TodoItem from "../components/TodoItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        getData();

    }, [])

    useEffect(() => {
        updateStorage();
    }, [todos])
    async function getData() {
        let arr = await JSON.parse(AsyncStorage.getItem('todo')) || [];
        setTodos([...arr]);
    }
    function change(data) {
        setInput(data);
    }
    function deleteItem(index) {
        todos.splice(index, 1);
        setTodos([...todos]);
    }
    function add() {
        console.log("ss")
        setTodos([...todos, input])

    }
    async function updateStorage() {
        await AsyncStorage.setItem('todo', JSON.stringify(todos));

    }
    return (
        <View style={{ display: 'flex' }}>
            <TextInput keyboardType="default" onChangeText={change} keyboardAppearance={"light"} placeholder="enter task" style={{ width: 100 }} />
            <Text>{input}</Text>
            <Button onPress={add} title="save" />
            <ScrollView>
                {
                    todos.map((item, index) => {
                        return <TodoItem fun={deleteItem} item={item} key={index} index={index} />
                    })
                }
            </ScrollView>

        </View>
    )
}

export default Todo
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useCounter } from '../store/counterStore'
import DB from "../firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';

function Home() {
    const [book, setBook] = useState({});

    function handleName(val) {
        setBook({ ...book, name: val })
    }
    function handlePrice(val) {
        setBook({ ...book, price: val })
    }
    function handleDesc(val) {
        setBook({ ...book, desc: val })
    }
    async function save() {
        console.log(book);

        const refCollection = collection(DB, "books");
        const createdDoc = await addDoc(refCollection, book);
        console.log(createdDoc);

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Book</Text>
            <TextInput
                style={styles.input}
                placeholder="name"
                onChangeText={handleName}

            />
            <TextInput
                style={styles.input}
                placeholder="price"
                onChangeText={handlePrice}

            />
            <TextInput
                style={styles.input}
                placeholder="decs"
                onChangeText={handleDesc}

            />
            <Button title="login" onPress={save} />
            <Text style={styles.link}>
                Do not  have an account? register
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    link: {
        color: 'blue',
        marginTop: 10,
        textAlign: 'center',
    },
});
export default Home
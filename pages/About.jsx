import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import db from '../firebaseConfig'
import { onSnapshot, collection, getDocs, deleteDoc, doc, getDoc, query, where, updateDoc, setDoc } from 'firebase/firestore';
function About() {
    const [arr, setArr] = useState([])
    const [text, setText] = useState();
    useEffect(() => {
        const ref = collection(db, 'books');

        getDocs(ref, (data) => {
            let a = [];
            data.docs.forEach((value) => {
                // console.log(value.data())
                a.push({ ...value.data(), id: value.id });
            })
            setArr([...a]);
        })


    }, [])

    async function searchBook() {
        console.log(text);
        const refCollection = collection(db, 'books');
        const q = query(refCollection, where("name", "==", text));
        const data = await getDocs(q);
        let values = data.docs.map(value => {
            return { ...value.data(), id: value.id }
        });
        console.log(values);
        setArr(values);
    }
    async function deleteBook(item) {
        try {
            console.log(item.id)
            const refDoc = doc(db, "books", item.id)
            const del = await deleteDoc(refDoc);
            console.log(del);
        }
        catch (e) {
            console.log(e);
        }
    }
    function handleText(e) {
        setText(e);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipe Book</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search Book"
                onChangeText={handleText}
                onBlur={searchBook}
                value={text}

            />
            <FlatList
                data={arr}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => deleteBook(item)}>
                        <View style={styles.card}>
                            <Text style={styles.recipeTitle}>{item.name}</Text>
                            <Text style={styles.recipeTitle}>{item.price}</Text>
                            <Text style={styles.category}>{item.desc}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'center',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    card: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
    },
    recipeTitle: {
        fontSize: 24,
        padding: 10,
    },
    category: {
        fontSize: 14,
        color: '#777',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#FF6347',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 30,
        lineHeight: 30,
    },
});
export default About
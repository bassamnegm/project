import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function Register() {
    const nav = useNavigation()
    const [user, setUser] = useState();
    function go() {
        console.log(user);
        axios.post('http://10.171.241.183:5000/api/auth/register', user).then(res => {
            console.log("first")
            console.log(res)
            nav.navigate('login');
        }
        ).catch(err => {
            console.log("err")
        }
        );
        //nav.navigate('login');
    }
    function handleName(val) {
        setUser({ ...user, username: val })
    }
    function handelPass(val) {
        setUser({ ...user, password: val })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handelPass}

            />
            <Button title="Register" onPress={go} />
            <Text style={styles.link}>
                Already have an account? Login
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

export default Register;
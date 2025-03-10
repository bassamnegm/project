import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from '../store/authStore';

function Register() {
    const authStore = useAuth();
    const nav = useNavigation()
    const [user, setUser] = useState();
    function go() {
        console.log(user);

        authStore.signUp(user).then(res => {
            nav.navigate('login');
        }
        ).catch(e => console.log(e));
        //  

    }
    function handleName(val) {
        setUser({ ...user, email: val })
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
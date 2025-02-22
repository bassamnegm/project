import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from '../store/authStore';

function Login() {
    const nav = useNavigation();
    const [user, setUser] = useState();
    const auth = useAuth();
    function go() {
        auth.login(user);
        // nav.navigate('home');
    }

    function handleName(val) {
        setUser({ ...user, username: val })
    }
    function handelPass(val) {
        setUser({ ...user, password: val })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleName}

            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handelPass}

                secureTextEntry
            />
            <Button title="login" onPress={go} />
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

export default Login;
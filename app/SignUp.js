import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../Config';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import Home from './Home';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        //alert("register")

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                    password,
                    confirmPassword,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home')
                        alert("Done")
                    })
                    .catch((error) => {
                        alert(error)
                    });

            })
            .catch((error) => {
                alert("Eroor"+error)
            });
    }

    const loginUser = () => {
        if (email === 'user@domain.com' && password === 'password') {
            navigation.navigate('Home');

        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/backlogin.png')}
                style={styles.header}>
            </ImageBackground>
            <View style={styles.card}>
                <Text style={styles.text}>Sign up to join</Text>
                <TextInput style={styles.input} placeholder="email" onChangeText={(text) => setEmail(text)}
                />
                <TextInput style={styles.input} placeholder="username" onChangeText={(text) => setUsername(text)}
                />
              
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}
                />
                <TextInput style={styles.input} placeholder="confirmpassword" secureTextEntry={true} onChangeText={(text) => setconfirmPassword(text)}
                />

              

                <TouchableOpacity style={styles.button} onPress={onRegisterPress}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,

        width: '100%', // عرض الصورة بنسبة 100% لتغطي العرض بالكامل
        height: 800, // ارتفاع الصورة بنسبة 100% لتغطي الارتفاع بالكامل
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    forgotPasswordButton: {
        width: '100%',
        textAlign: 'flex-end',
    },
    forgotPasswordButtonText: {
        color: '#3563E9',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        marginTop: -550,
        width: '90%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#3563E9',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#3563E9',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        color: '#C4C4C4',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
    }
});


export default SignUp;
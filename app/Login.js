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


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);

    const navigation = useNavigation();
    const user = {
        username: email,
        password: password,
    };

    const loginUser = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                alert('Login Successful!');
                navigation.navigate('TabBar');
            })
            .catch((error) => {
                alert('Error', error.message);
            });
    };
    const gotocreate = () => {
            navigation.navigate('Create');
    }

       
    const loginUsertest = () => {
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
                <Text style={styles.text}>Sign in to join</Text>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)}
/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}
/>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordButtonText}>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton} onPress={gotocreate}>
                    <Text style={styles.createAccountButtonText}>Create Account</Text>
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
        marginTop: -490,
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
    text:{
        color: '#C4C4C4',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
    }
});


export default Login;
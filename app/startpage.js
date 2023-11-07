import React, { useState,  useEffect  } from 'react';
import { View, Text, Button, TextInput, Image, ScrollView ,
StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import TabBar from './TabBar';

const StartPage = () => {
    const navigation = useNavigation();

    const getstart = () => {
        navigation.navigate('TabBar'); // Replace 'NextScreen' with the name of your target screen

    };
    useEffect(() => {
        // Use setTimeout to navigate to another screen after 3 seconds
        const timer = setTimeout(() => {
            navigation.navigate('TabBar'); // Replace 'NextScreen' with the name of your target screen
        }, 3000); // 3000 milliseconds (3 seconds)

        // Clear the timer if the component unmounts (optional)
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           
            <ImageBackground
                source={require('../assets/startback.png')}
                style={styles.header}>

                <TouchableOpacity style={styles.button} onPress={getstart}>
                    <Text style={styles.buttonText}>Get Start</Text>
                </TouchableOpacity>
            <Text style={styles.text}>By zcode</Text>
            </ImageBackground>
            
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
    button: {
        backgroundColor: '#ECEBEB',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '50%',
        alignItems: 'center',
        marginTop:600,
    },
    buttonText: {
        color: '#3563E9',
        fontWeight: 'bold',
    },
    text:{
        marginTop:50,

        color: '#ECEBEB',

    }
});

export default StartPage;

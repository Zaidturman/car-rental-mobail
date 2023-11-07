import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Navbar from './NavBar';

import Login from './Login';
import TabBar from './TabBar';
import CarList from './Cars';
import ButtonSlider from './ButtonSlider';
const Home = () => {
  
    return (
        <>
        <Header />
        
            <ButtonSlider/>
            <CarList />

       
        
        </>
    );
}

const styles = StyleSheet.create({
    tabbar:{

        position: 'absolute',
        bottom: 20, // يمكنك ضبط هذه القيمة وفقًا لاحتياجات التصميم
    },
    tab:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    }
});

export default Home;

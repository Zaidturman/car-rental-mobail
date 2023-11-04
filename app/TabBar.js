import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Navbar from './NavBar';
import NavBarWithMenu from './NavBarWithMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import ProfileView from './ProfileView';
const TabBar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <>
            <View
                tabBarOptions={{
                    style: { width: '100%' }, // هذا يجعل شريط التبويب يمتد عبر الشاشة بالكامل
                }}
            >
                <View name="Home" component={Home} />
                <View name="ProfileView" component={ProfileView} />
                {/* Add more screens as needed */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'end',
    },
    logo: {

        width: 155, // Set your desired logo width
        height: 22, // Set your desired logo height
    },
    menuIcon: {
        width: 30, // Set your desired menu icon width
        height: 30, // Set your desired menu icon height
    },
});

export default TabBar;

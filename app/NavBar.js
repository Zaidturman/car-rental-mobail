import React from 'react';
import { View, Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavBarWithMenu from './NavBarWithMenu'; // Import the NavBarWithMenu component
import SearchBar from './SearchBar';

const Navbar = () => {


    return (
        <>
            <SearchBar />

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
        
       
        
        },
});


export default Navbar;

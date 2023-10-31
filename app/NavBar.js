import React from 'react';
import { View, Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavBarWithMenu from './NavBarWithMenu'; // Import the NavBarWithMenu component

const Navbar = () => {


    return (
        <View style={styles.container}>
            
            <Text>Home</Text>
            <Text>about </Text>
            <Text>cars</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Navbar;

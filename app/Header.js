import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Navbar from './NavBar';
import NavBarWithMenu from './NavBarWithMenu';

const Header = ({ title }) => {
    const [isComponentVisible, setComponentVisible] = useState(false);

    const toggleComponent = () => {
        setComponentVisible(!isComponentVisible);
    };
    return (
        <View style={styles.navbar}>
            <View style={styles.logoContainer}>

                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View >

                <TouchableOpacity onPress={toggleComponent}>
                    <Image
                        source={require('../assets/icons8-menu-24.png')}
                        style={styles.menuIcon}


                    />


                </TouchableOpacity>
            </View>

            <View style={styles.navbar}>
                {isComponentVisible && (
                    <Navbar />
                )}
           </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'start',
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

export default Header;

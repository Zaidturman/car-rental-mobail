import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Navbar from './NavBar';
import NavBarWithMenu from './NavBarWithMenu';
import ProfileScreen from './ProfileScreen';
import ProfileView from './ProfileView';
import SearchBar from './SearchBar';
const Header = ({ title }) => {
    const navigation = useNavigation();

    const [isComponentVisible, setComponentVisible] = useState(false);

    const toggleComponent = () => {
        setComponentVisible(!isComponentVisible);
    };

    const toggleProfile = () => {
        navigation.navigate('ProfileView'); // Replace 'NextScreen' with the name of your target screen
    };


    return (
        <>
        <View style={styles.navbar}>
            <View style={styles.logoContainer}>

                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
        
            <View>
                <TouchableOpacity onPress={toggleProfile}>
                    <Image
                        source={require('../assets/icons8-profile-48.png')}
                        style={styles.profile}


                    />


                </TouchableOpacity>
            </View>
            <View >

                <TouchableOpacity onPress={toggleComponent}>
                    <Image
                        source={require('../assets/icons8-search-48.png')}
                        style={styles.menuIcon}


                    />


                </TouchableOpacity>

            </View>

            
           
        </View>
        < >
                {isComponentVisible && (
                    <SearchBar />
                )}
           </>
           </>
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
        marginTop:12,
        width: 155, // Set your desired logo width
        height: 22,
         // Set your desired logo height
    },
    menuIcon: {
        width: 30, // Set your desired menu icon width
        height: 30,
        marginLeft:15, // Set your desired menu icon height
    },
    profile:{
        width: 35, // Set your desired menu icon width
        height: 35,
        marginLeft: 15,
    }
});

export default Header;

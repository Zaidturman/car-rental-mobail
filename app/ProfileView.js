import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileView = (props) => {

    const navigation = useNavigation();

    const toggleProfile = () => {
      navigation.navigate('ProfileScreen'); // Replace 'NextScreen' with the name of your target screen
    };
   
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icons8-profile-48.png')  }
                style={styles.profileImage}
            />
            <Text style={styles.name}>Zaid turman</Text>
            <Text style={styles.bio}>Front-end Developer</Text>
            <Text style={styles.details}>Location: New York</Text>
            <Text style={styles.details}>Email: john.doe@example.com</Text>
            <TouchableOpacity style={styles.button} onPress={toggleProfile}>
                <Text style={styles.buttonText}>Update profile</Text>
            </TouchableOpacity>
           
            {/* Add more user details as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // To make it a circular image
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bio: {
        fontSize: 18,
        marginBottom: 10,
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
    },
    createAccountButton: {
        backgroundColor:'#3563E9',
        marginTop: 20,
        padding:10,
    
    },
    createAccountButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#337ab7',
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default ProfileView;

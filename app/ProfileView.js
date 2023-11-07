import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './ui/Card';
import {firebase} from '../Config'

const ProfileView = (props) => {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    



    const navigation = useNavigation();

    const toggleProfile = () => {
        navigation.navigate('ProfileScreen'); // Replace 'NextScreen' with the name of your target screen
    };
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            alert('User signed out successfully');
            navigation.navigate('Home');
        }).catch((error) => {
            alert('Error signing out:', error);
        });
    };
    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged((users) => {
            if (users) {
                setName(users.displayName)
                setEmail(users.email)
                

            } else {

            }
    });
        return () => unsubscribe();
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icons8-profile-48.png')}
                style={styles.profileImage}
            />
            <Text style={styles.name}>{name}</Text>


            <Text style={styles.bio}></Text>
            <Text style={styles.details}></Text>
            <Text style={styles.details}>{email}</Text>
            <Card style={styles.card}>
                <View style={styles.buttons}>

                    <Image
                        source={require('../assets/icons8-edit-profile-32.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('../assets/icons8-notification-50.png')}
                        style={styles.icon}

                    />
                    <Image
                        source={require('../assets/icons8-language-50.png')}
                        style={styles.icon}

                    />
                    <Image
                        source={require('../assets/icons8-car-50.png')}
                        style={styles.icon}

                    />

                </View>
                <View style={ styles.buttons}>

                    <Button title="Edit Profile" onPress={() => navigation.navigate('ProfileScreen')} />
                    <Button title="notification" />
                    <Button title="Language" />
                    <Button title="Add Cars" onPress={() => navigation.navigate('AddCar')} />




                </View>


            </Card>
            <Card style={styles.card}>
                <View>

                    <Image
                        source={require('../assets/icons8-safe-browsing-50.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('../assets/icons8-theme-50.png')}
                        style={styles.icon}

                    />
                 
                </View>
                <View style={styles.buttons}>

                    <Button title="Security" />
                    <Button title="Theme" />



                </View>


            </Card>
            <Card style={styles.card}>
                <View style={styles.buttons}>

                   
                    <Image
                        source={require('../assets/icons8-info-50.png')}
                        style={styles.icon}

                    />
                    <Image
                        source={require('../assets/icons8-customer-support-50.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('../assets/icons8-privacy-policy-50.png')}
                        style={styles.icon}

                    />

                </View>
                <View style={styles.buttons}>

                    <Button title="Help & Support" />
                    <Button title="Conact us" />
                    <Button title="Privacy Policy" />



                </View>


            </Card>
        
                <View>
                <TouchableOpacity style={styles.buttonlogout} onPress={signOut}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>


               

              


            {/* Add more user details as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
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
        backgroundColor: '#3563E9',
        marginTop: 20,
        padding: 10,

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
    buttonlogout:{
        alignItems: 'center',
        backgroundColor: '#FF0000',
        padding: 10,
        marginTop: 10,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',

    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin : 10,
    }

});

export default ProfileView;

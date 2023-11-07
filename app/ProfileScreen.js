import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setSelectedImage(source);
            }
        });
    };


    return (
        <ScrollView>
        
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View >
                    <TouchableOpacity onPress={openImagePicker}>
                        <Image
                            source={require('../assets/icons8-profile-48.png')}
                            style={styles.profileImage}

                        />

                </TouchableOpacity>
                   
</View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setUsername}
                        value={username}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Change Password</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // To make it a circular image
        marginBottom: 10,
        marginTop:40,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 6,
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingLeft: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        padding: 14,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default ProfileScreen;
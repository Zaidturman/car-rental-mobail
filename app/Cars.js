import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

const CarList = () => {
    const data = [
        {
            id: '1',
            make: 'Toyota',
            model: 'Camry',
            year: 2022,
            image: require('../assets/car.png'),
            transmission: 'Automatic',
            passengers: 5,
            rate: 4.5,
            doors: 4,
            price: '$80/day',
        },
        {
            id: '2',
            make: 'Toyota',
            model: 'Camry',
            year: 2022,
            image: require('../assets/car.png'),
            transmission: 'Automatic',
            passengers: 5,
            rate: 4.5,
            doors: 4,

            price: '$50/day',
        },
        {
            id: '3',
            make: 'Toyota',
            model: 'Camry',
            year: 2022,
            image: require('../assets/car.png'),
            transmission: 'Automatic',
            passengers: 5,
            rate: 4.5,
            doors: 4,

            price: '$60/day',
        },
        // Add more car data here
    ];
    const navigation = useNavigation();

    const RentCar =()=>{
        navigation.navigate('RentCar'); // Replace 'NextScreen' with the name of your target screen

    }

    const renderItem = ({ item }) => (
        <View style={styles.carItem}>
            <Image source={item.image} style={styles.carImage} />
            <View style={styles.carDetails}>
                <Text style={styles.carName}>{item.make} {item.model}</Text>
                <View style={styles.carRating}>
                    <Text style={styles.carRate}>Rating: {item.rate}</Text>
                    <Text style={styles.carDoors}>Doors: {item.doors}</Text>
                </View>
                <Text style={styles.carTransmission}>Transmission: {item.transmission}</Text>
                <Text style={styles.carPassengers}>Passengers: {item.passengers}</Text>
            </View>
            <View style={styles.carBottom}>
                <Text style={styles.carPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.rentButton}>
                    <Text style={styles.rentButtonText} onPress={RentCar}>Rent</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
    
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.carList}
        />
    );
};

const styles = StyleSheet.create({
    carList: {
        padding: 16,
        marginTop: 40,

    },
    carItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 4,
    },
    carImage: {
        width: 200,
        height: 200,
        resizeMode: 'center',
        alignSelf: 'center', // Center the image vertically

        marginBottom: -30,
    },
    carDetails: {
        flex: 1,
    },
    carName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    carRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    carRate: {
        fontSize: 16,
    },
    carDoors: {
        fontSize: 16,
    },
    carTransmission: {
        fontSize: 16,
    },
    carPassengers: {
        fontSize: 16,
    },
    carBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    carPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rentButton: {
        backgroundColor: '#007bff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    rentButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CarList;

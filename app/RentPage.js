import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import CarList from './Cars';
import Card from './ui/Card';
import DateInput from './ui/Dateinput';
import { useNavigation } from '@react-navigation/native';

const Rent = () => {
    const navigation = useNavigation();

    const payment =()=>{
        navigation.navigate('PaymentMethods'); // Replace 'NextScreen' with the name of your target screen
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>AUDI</Text>

            <Image style={styles.image} source={require('../assets/car.png')} />
            <View style={styles.carInfo}>
                <Text style={styles.header}>Specification</Text>
                <View style={styles.card}>
                    <View>
                        <Card>
                            <View>
                                <Image source={require('../assets/icons8-petrol-station-50.png')} style={styles.icon} />
                                <Text>Desail</Text>
                            </View>
                        </Card>
                    </View>
                    <View>

                        <Card>
                            <View>
                                <Image source={require('../assets/icons8-seat-heater-50.png')} style={styles.icon} />

                                <Text>Cool Seat</Text>

                            </View>
                        </Card>
                    </View>
                    <View>

                        <Card>
                            <View>
                                <Image source={require('../assets/icons8-acceleration-60.png')} style={styles.icon} />

                                <Text>Acceleration</Text>

                            </View>
                        </Card>
                    </View>


                </View>
                <Card >
                    <View style={styles.carddetails}>
                        <View style={styles.card}>
                            <Text >AUDI</Text>
                            <Text>
                                9000 D.A
                                / per day
                            </Text>
                        </View>
                        <View style={styles.rate}>
                            <Image source={require('../assets/icons8-rate-30.png')} style={styles.icon} />

                            <Text>4.9 (230 Reviews)</Text>

                        </View>
                        <View style={styles.card}>
                            <View style={styles.rate}>
                                <Image source={require('../assets/icons8-car-seat-50.png')} style={styles.icon} />
                                <Text>
                                    4 Seats
                                </Text>
                            </View>
                            <View>
                                <View style={styles.rate}>
                                    <Image source={require('../assets/icons8-car-door-24.png')} style={styles.icon} />

                                    <Text>
                                        4 Doors
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.card}>
                            <View style={styles.rate}>
                                <Image source={require('../assets/icons8-gear-stick-50.png')} style={styles.icon} />

                                <Text>
                                    Manual
                                </Text>
                            </View>
                            <View style={styles.rate}>
                                <Image source={require('../assets/icons8-air-48.png')} style={styles.icon} />

                                <Text>
                                    Air Conditioning
                                </Text>
                            </View>
                        </View>


                    </View>
                </Card>

                <Card>
                    <View style={styles.carddetails}>
                        <Text>Company</Text>

                    </View>
                </Card>
                <Card>
                    <View style={styles.carddetails}>
                        <View style={styles.card}>
                            <Text style={styles.header}>Pick a date</Text>
                            <DateInput />
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.header}>return </Text>
                            <DateInput />

                        </View>
                    </View>

                </Card>


            </View>
            <TouchableOpacity style={styles.rentButton} onPress={payment}>
                <Text style={styles.rentButtonText}>RENT NOW</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    rate: {
        padding: 5,
        
               alignItem: 'center',
        flexDirection: 'row',
        justifyContent: 'start',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3563E9',
    },
    carddetails: {
        width: '100%',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        height: '13%',
    },
    carInfo: {
        paddingHorizontal: 20,
        paddingTop: 10,

    },
    title:

    {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle:
    {
        fontSize: 18,
        color: 'gray',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 5,
    },
    rentButton: {
        marginTop: 20,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#262626',
        borderRadius: 50,
    },
    rentButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        padding: 5,
        alignItem: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 20,
        height: 20,
    }
});

export default Rent;
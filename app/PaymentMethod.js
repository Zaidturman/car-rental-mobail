import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Card from './ui/Card';

const PaymentMethods = () => {

    const [master, setMaster] = useState(false)
    const openmaster = () => {
        setMaster(!master)
    }
    const [visa, setVisa] = useState(false)
    const openvisa = () => {
        setVisa(!visa)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openmaster} style={styles.cardContainer}>
                <Card >
                    <View style={styles.cardContainer}>

                        <Text style={styles.cardText}>MasterCard</Text>

                        {master &&
                            <View style={styles.inputpay}>

                                <Text style={styles.label}>Card Number</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                                <Text style={styles.label}>Card Holder's Name</Text>
                                <TextInput style={styles.input} />

                                <Text style={styles.label}>DD/MM/YY</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                                <Text style={styles.label}>CVV</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                            </View>
                        }
                    </View>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={openvisa} style={styles.cardContainer}>

                <Card>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardText}>VISA</Text>
                        {visa &&
                            <View style={styles.inputpay}>

                                <Text style={styles.label}>Card Number</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                                <Text style={styles.label}>Card Holder's Name</Text>
                                <TextInput style={styles.input} />

                                <Text style={styles.label}>DD/MM/YY</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                                <Text style={styles.label}>CVV</Text>
                                <TextInput style={styles.input} keyboardType="numeric" />

                            </View>
                        }
                    </View>
                </Card>
            </TouchableOpacity>

            <Card>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardText}>P PayPal</Text>
                </View></Card>
            <Card>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardText}>AMERICAN LOURDES</Text>
                </View>
            </Card>




            <TouchableOpacity style={styles.rentButton} onPress={() => alert('Payment Processed')}>
                <Text style={styles.rentButtonText}>Pay now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    inputpay: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '100%',

        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
    },
    cardText: {
        fontSize: 14,
    },
    payNowButton: {
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: '#3498DB',
    },
    payNowText: {
        fontSize: 16,
        color: '#FFF',
    },
});

export default PaymentMethods;
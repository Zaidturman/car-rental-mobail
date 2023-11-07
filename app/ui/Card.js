import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>

            <View style={styles.cardchildren}>

            {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width:'90%',
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      margin:10,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardchildren:{
        alignItems: 'start',

        flexDirection: 'row',
        justifyContent: 'start',
    }
});

export default Card;
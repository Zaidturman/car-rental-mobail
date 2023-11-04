import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ButtonSlider = () => {
    const [contentType, setContentType] = useState("أخبار");

    const buttons = contentTypes.map((contentType) => (
        <Button
            title={contentType}
            color="primary"
            onClick={() => setContentType(contentType)}
            style ={styles.btn}
        />
    ));

    return (
        <View style={styles.navbar}>
            {buttons}
        </View>
    );
};

const contentTypes = ["Luxury Car", "Familiy Car", "small bus", "large bus"];
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    },
    btn:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'blue', // Change the color to your desired border color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
})
export default ButtonSlider;
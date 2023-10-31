import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sidebar = ({ onClose }) => {
    return (
        <View style={styles.sidebar}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text>Close</Text>
            </TouchableOpacity>
            <Text>Menu Item 1</Text>
            <Text>Menu Item 2</Text>
            <Text>Menu Item 3</Text>
            {/* Add more menu items as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor: '#fff', // Background color of the sidebar
        width: 250, // Adjust the width as needed
        paddingTop: 20,
    },
    closeButton: {
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    // Add more styles as needed to customize the appearance
});

export default Sidebar;

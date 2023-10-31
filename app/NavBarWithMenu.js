import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const NavBarWithMenu = ({ menuItems, onMenuItemPress }) => {
    return (
        <View style={styles.navBar}>
            <FlatList
                data={menuItems}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onMenuItemPress(item)}>
                        <Text style={styles.menuItem}>{item.label}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    },
    title: {
        color: 'blue', // Set your desired text color
        fontSize: 20, // Set your desired font size
        fontWeight: 'bold',
    },
    menuItem: {
        color: 'blue', // Set your desired text color for menu items
        fontSize: 16, // Set your desired font size for menu items
        marginLeft: 20, // Set the spacing between menu items
    },
});

export default NavBarWithMenu;

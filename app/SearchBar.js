import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchData = (text) => {
        // Implement your search logic here.
        // const filteredData = yourDataArray.filter(item => item.includes(text));
        // setSearchResults(filteredData);
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={searchText}
                    onChangeText={(text) => {
                        setSearchText(text);
                        searchData(text);
                    }}
                />
                <Button
                    title="Search"
                    onPress={() => searchData(searchText)}
                    style={styles.btn}
                />
            </View>
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Text style={styles.resultItem}>{item}</Text>
                )}
                keyExtractor={(item) => item.toString()}
            />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        padding: 5,
    },
    inputContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
    },
    input: {
        backgroundColor: '#fff',

        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    resultItem: {
        fontSize: 16,
        marginBottom: 8,
    },
    btn:{
        color:'#fff',
        backgroundColor: '#fff',

    }
});

export default SearchBar;

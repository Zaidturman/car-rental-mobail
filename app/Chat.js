// NotificationScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const messages = [
    { id: '1', text: 'Hello there!' },
    { id: '2', text: 'How are you?' },
    { id: '3', text: 'Im doing well, thanks!' },
  // Add more messages here
];

const MessageItem = ({ message }) => (
    <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
    </View>
);

const Chat = (props) => {
    return (
        <>
        <Text>
            Name
        </Text>

        <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MessageItem message={item} />}
        />

        </>
    );
};
const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    messageText: {
        fontSize: 16,
    },
});

export default Chat;

import React ,{useState}from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat';
import SearchBar from './SearchBar';
const data = [
    {
        id: '1',
        name: 'John Doe',
        message: 'Hello there!',
        date: '2 hours ago',
        avatar: require('../assets/icons8-profile-48.png'), // Replace with actual image path
    },
    {
        id: '2',
        name: 'Alice Smith',
        message: 'Hi, how are you?',
        date: '5 hours ago',
        avatar: require('../assets/icons8-profile-48.png'), // Replace with actual image path


    },
    // Add more chat items here
];

const ChatList = () => {
    const navigation = useNavigation();
    const Stack = createStackNavigator();

    const handleChatItemClick =()=>{
        navigation.navigate('Chat'); // Replace 'NextScreen' with the name of your target screen

    }
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (
        <>
            <SearchBar/>
        <FlatList 

            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => toggleChat}>

                <View style={styles.chatItem}
                >

                    <Image source={item.avatar} style={styles.avatar} />
                    <View style={styles.chatContent}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                </TouchableOpacity>
                
            )}
             

        />
            {isChatOpen && (
                <Chat />
            )}

        </>
    );
};

const styles = StyleSheet.create({
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    chatContent: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#777',
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
});

export default ChatList;

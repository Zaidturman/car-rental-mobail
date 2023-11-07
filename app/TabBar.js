import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Navbar from './NavBar';
import NavBarWithMenu from './NavBarWithMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import NotificationScreen from './Notifaction';
import Chat from './Chat';
import Cars from './Cars';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from './ChatList';
import Setting from './Setting';
import ProfileView from './ProfileView';
import MyNavigator from './MyNavigator';
import Login from './Login';
import SignUp from './SignUp';
import StartPage from './startpage';
import ProfileScreen from './ProfileScreen';
import SearchBar from './SearchBar';
import Rent from './RentPage';
import PaymentMethods from './PaymentMethod';
import AddCar from './AddCar';
const TabBar =()=>{
    const Stack = createStackNavigator();

    return (
    <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Start" component={StartPage} 
                    
                />
                <Stack.Screen name="TabBar" component={TabBarbutton} />

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Create" component={SignUp} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ProfileView" component={ProfileView} />
                <Stack.Screen name="Navbar" component={Navbar} />
                <Stack.Screen name="SearchBar" component={SearchBar} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Cars" component={Cars} />
                <Stack.Screen name="RentCar" component={Rent} />
                <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
                <Stack.Screen name="AddCar" component={AddCar} />





            </Stack.Navigator>  
              </NavigationContainer>
    );
}

const TabBarbutton = () => {
    const Tab = createBottomTabNavigator();

    return (
        <>

                <Tab.Navigator
                    tabBarOptions={{
                        style: { width: '100%' }, // هذا يجعل شريط التبويب يمتد عبر الشاشة بالكامل
                       // showLabel: false,
                    }}
                screenOptions={{ headerShown: false }}


                >

                    <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source={require('../assets/icons8-homepage-64.png')}
                                    style={styles.icon}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen name="NotificationScreen" component={NotificationScreen}
                        options={{
                            tabBarLabel: 'Notification',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source={require('../assets/icons8-notification-48.png')}
                                    style={styles.icon}
                                />
                            ),

                        }} />

                    <Tab.Screen name="Cars" component={Cars}
                        options={{
                            tabBarLabel: 'Cars',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source={require('../assets/icons8-cars-30.png')}
                                    style={styles.icon}
                                />
                            ),

                        }} />



                    <Tab.Screen name="Chats" component={ChatList}
                        options={{
                            tabBarLabel: 'Chat',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source={require('../assets/icons8-chat-64.png')}
                                    style={styles.icon}
                                />
                            ),

                        }} />
                    <Tab.Screen name="Setting" component={Setting}
                        options={{
                            tabBarLabel: 'Setting',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source={require('../assets/icons8-setting-64.png')}
                                    style={styles.icon}
                                />
                            ),

                        }} />




                    {/* Add more screens as needed */}
                </Tab.Navigator>



        </>
    );
}

const styles = StyleSheet.create({
    
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        backgroundColor: 'white', // Set your desired background color
        padding: 10,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'end',
    },
    logo: {

        width: 155, // Set your desired logo width
        height: 22, // Set your desired logo height
    },
    menuIcon: {
        width: 30, // Set your desired menu icon width
        height: 30, // Set your desired menu icon height
    },
      icon:{
    width:30,
    height:30,
  }
});

export default TabBar;

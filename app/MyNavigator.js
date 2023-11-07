import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import StartPage from './startpage';
import ProfileScreen  from './ProfileScreen';
import ProfileView from './ProfileView';
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import NotificationScreen from './Notifaction';
import Chat from './Chat';
import Cars from './Cars';


function MyNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
>
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Start" component={StartPage} />

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


        </Stack.Navigator>

    );
}

export default MyNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import StartPage from './startpage';


function MyNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={StartPage} />

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={SignUp} />

        </Stack.Navigator>

    );
}

export default MyNavigator;

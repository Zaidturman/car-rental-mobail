import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import StartPage from './app/startpage';
import Header from './app/Header';
import Home from './app/Home';
import Navbar from './app/NavBar';
import SplashScreen from './app/SplashScreen';
import Login from './app/Login';
import MyNavigator from './app/MyNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from './app/Sidebar';

export default function App() {


  return (

    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    backgroundColor: 'white', // Set your desired background color
    padding: 10,

  },
});

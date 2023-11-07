import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image } from 'react-native';
import StartPage from './app/startpage';
import Header from './app/Header';
import Home from './app/Home';
import Navbar from './app/NavBar';
import SplashScreen from './app/SplashScreen';
import Login from './app/Login';
import MyNavigator from './app/MyNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from './app/Sidebar';
import TabBar from './app/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileView from './app/ProfileView';
import NotificationScreen from './app/Notifaction';
import Chat from './app/Chat';
import Cars from './app/Cars';
import SignUp from './app/SignUp';
import ProfileScreen from './app/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from './app/ChatList';
import Setting from './app/Setting';
export default function App() {


  return (
    <>
    <TabBar/>



    </>
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
  icon:{
    width:30,
    height:30,
  }
});

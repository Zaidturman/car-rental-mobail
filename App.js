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
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <>
    <NavigationContainer>

      <Tab.Navigator
        tabBarOptions={{
          style: { width: '100%' }, // هذا يجعل شريط التبويب يمتد عبر الشاشة بالكامل
          showLabel: false,
        }}
      >
      
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons8-homepage-64.png')}
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
                source={require('./assets/icons8-notification-48.png')}
                style={styles.icon}
              />
            ),

          }} />

        <Tab.Screen name="Cars" component={Cars}
          options={{
            tabBarLabel: 'Cars',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons8-cars-30.png')}
                style={styles.icon}
              />
            ),

          }} />
      
       
        
        <Tab.Screen name="Chats" component={ChatList}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons8-chat-64.png')}
                style={styles.icon}
              />
            ),

          }} />
        <Tab.Screen name="Setting" component={Setting}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/icons8-setting-64.png')}
                style={styles.icon}
              />
            ),

          }} />


      

        {/* Add more screens as needed */}
      </Tab.Navigator>


      <Stack.Screen name="ProfileView" component={ProfileView} />
    </NavigationContainer>



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

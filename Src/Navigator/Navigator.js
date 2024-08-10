import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../../Pages/FirstScreen/FirstScreen';
import LoginPage from '../../Pages/LoginPage/LoginPage'; 
import HomePage from '../../Pages/HomePage/HomePage';
import SignUp from '../../Pages/SignUp/SignUp';
import Verify from '../../Pages/SignUp/Verify';
import Password from '../../Pages/SignUp/Password'; 
import DiscoverPage from '../../Pages/AltbarPages/DiscoverPage';
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';
import AppointmentPage from '../../Pages/AltbarPages/AppointmentPage';
import AppointmentsDetail from '../../Pages/AltbarPages/AppointmentsDetail';  // Yeni sayfayı import edin
import MessagePage from '../../Pages/AltbarPages/MessagePage/MessagePage'; // Yeni sayfayı import edin

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen 
          name="FirstScreen" 
          component={FirstScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="MessagePage" 
          component={MessagePage} 
          options={{ headerShown: true, headerTitle: 'Mesajlar' }} 
        />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="AppointmentsDetail" 
          component={AppointmentsDetail} 
          options={{ headerShown: true, headerTitle: 'Randevu Detayı' }} 
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} 
        /> 
        <Stack.Screen 
          name="Verify" 
          component={Verify} 
          options={{ headerShown: false }} 
        /> 
        <Stack.Screen 
  name="AppointmentPage"
  component={AppointmentPage}
  options={{
    headerShown: true,
    headerTitle: 'Randevular',
    headerStyle: {
      backgroundColor: '#EDF2FE',
    },
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }}
/>

        <Stack.Screen 
          name="Password" 
          component={Password} 
          options={{ headerShown: false }} 
        /> 
        <Stack.Screen 
          name="DiscoverPage"
          component={DiscoverPage}
          options={{
            headerShown: true,
            headerTitle: 'Keşfet',
            headerStyle: {
              backgroundColor: '#EDF2FE',
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen 
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerShown: true,
            headerTitle: 'Profil',
            headerStyle: {
              backgroundColor: '#EDF2FE',
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

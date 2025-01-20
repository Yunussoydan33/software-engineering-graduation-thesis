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
import AppointmentsDetail from '../../Pages/AltbarPages/AppointmentsDetail';  
import MessagePage from '../../Pages/AltbarPages/MessagePage/MessagePage'; 
import EarningsPage from '../../Pages/EarningsPage'; 
import TargetPage from '../../Pages/TargetPage'; 
import ScoreDetailsPage from '../../Pages/HomePage/ScoreDetailsPage'; 
import DoctorListPage from '../../Pages/Doctor/DoctorListPage'; 
import DoctorDetails from '../../Pages/Doctor/DoctorDetails'; 
import ServiceSelection from '../../Pages/Doctor/ServiceSelection';
import CalenderPage from '../../Pages/Doctor/CalenderPage'; 
import CashBack from '../../Pages/AltbarPages/CashBack/CashBack';  
import CashBackInfo from '../../Pages/AltbarPages/CashBack/CashBackInfo';  
import TeklifToplaPages from '../../Pages/AltbarPages/Tekflif/TeklifToplaPages';  
import TeklifToplaPages2 from '../../Pages/AltbarPages/Tekflif/TeklifToplaPages2'; 
import TekliflerimPage from '../../Pages/AltbarPages/Tekflif/TekliflerimPage'; 

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
          name="TeklifToplaPages2" 
          component={TeklifToplaPages2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="EarningsPage" 
        component={EarningsPage} 
       options={{ headerShown: true, headerTitle: 'Kazançlar' }} 
        />
        <Stack.Screen 
        name="TeklifToplaPage" 
        component={TeklifToplaPages} 
        options={{ headerShown: false, headerTitle: 'Teklif Topla' }} 
          />
         <Stack.Screen 
          name="MessagePage" 
          component={MessagePage} 
          options={{ headerShown: true, headerTitle: 'Mesajlar' }} 
        />
        <Stack.Screen 
         name="TekliflerimPage" 
          component={TekliflerimPage} 
           options={{ headerShown: false, headerTitle: 'Tekliflerim' }} 
          />
        <Stack.Screen 
          name="CashBackInfo" 
          component={CashBackInfo} 
          options={{ headerShown: true, headerTitle: 'CashBack' }} 
        />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
         name="DoctorDetails" 
        component={DoctorDetails} 
        options={{ headerShown: true, headerTitle: 'Doktor Detayları' }} 
/>
        <Stack.Screen 
        name="DoctorListPage" 
        component={DoctorListPage} 
        options={{ headerShown: true, headerTitle: 'Doktor Ara' }} 
/>
        <Stack.Screen 
        name="ScoreDetailsPage" 
        component={ScoreDetailsPage} 
       options={{ headerShown: true, headerTitle: 'Skor Detayları' }} 
/>
         <Stack.Screen 
          name="AppointmentsDetail" 
          component={AppointmentsDetail} 
          options={{ headerShown: true, headerTitle: 'Randevu Detayı' }} 
        />
        <Stack.Screen 
        name="TargetPage" 
      component={TargetPage} 
      options={{ headerShown: true, headerTitle: 'Hedef Sayfası' }} 
      />
      <Stack.Screen 
      name="ServiceSelection" 
      component={ServiceSelection} 
      options={{ headerShown: true, headerTitle: 'Hizmet Seçimi' }} 
      />
      <Stack.Screen 
  name="CalenderPage" 
  component={CalenderPage} 
  options={{ headerShown: true, headerTitle: 'Tarih Seçimi' }} 
/>
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="CashBack" 
          component={CashBack} 
          options={{ headerShown: true, headerTitle: 'CashBack' }} 
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

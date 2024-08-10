import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import AppointmentsDetailCard from '../../Src/components/AppointmentsCard/AppointmentsDetailCard';
import AppointmentsInfoCard from '../../Src/components/AppointmentsCard/AppointmentsInfoCard';

export default function AppointmentsDetail() {
    return (
      <View style={styles.container}>
        <AppointmentsDetailCard />
        <AppointmentsInfoCard />
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDF2FE',
      padding: 20,
    },
    messageButton: {
      backgroundColor: '#363842',  // Butonun arka plan rengi
      paddingVertical: 15,  // Dikey padding
      borderRadius: 10,  // Yuvarlatılmış köşeler
      alignItems: 'center',
      marginTop: 20,  // Buton ile üstündeki kart arasındaki boşluk
    },
    messageButtonText: {
      color: '#FFFFFF',  // Butonun metin rengi
      fontSize: 16,  // Metin boyutu
      fontWeight: '600',  // Metin kalınlığı
    },
  });

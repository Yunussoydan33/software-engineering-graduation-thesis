import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomePageSvg from '../../assets/Svg/HomePageSvg';
import AppointmentsSvg from '../../assets/Svg/AppointmentsSvg';
import MessageSvg from '../../assets/Svg/MessageSvg';
import KesfetSvg from '../../assets/Svg/KesfetSvg';
import TeklifToplaSvg from '../../assets/Svg/TeklifToplaSvg';
import { useNavigation } from '@react-navigation/native';

const AltBar = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HomePage')}>
              <HomePageSvg />
              <Text style={styles.text}>Anasayfa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MessagePage')}>
              <MessageSvg />
              <Text style={styles.text}>Mesajlar</Text>
          </TouchableOpacity>

          <View style={styles.centerItem}>
              <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('TeklifToplaPage')}>
                  <TeklifToplaSvg />
              </TouchableOpacity>
              <Text style={styles.centerText}>Teklif Topla</Text>
          </View>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AppointmentPage')}>
              <AppointmentsSvg />
              <Text style={styles.text}>Randevular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DiscoverPage')}>
              <KesfetSvg />
              <Text style={styles.text}>Keşfet</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 17, // Dikeyde daha fazla boşluk
      borderTopWidth: 1,
      borderColor: '#E5E5E5',
      position: 'absolute',
      bottom: 0,
      width: '100%',
  },
  item: {
      alignItems: 'center',
  },
  text: {
      color: '#2A2A2A',
      fontSize: 12,
      marginTop: 5,
  },
  centerItem: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  centerButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#2A2A2A',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -30,
  },
  centerText: {
      color: '#2A2A2A',
      fontSize: 12,
      marginTop: 35,
  },
});

export default AltBar;

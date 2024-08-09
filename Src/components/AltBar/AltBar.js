import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import HomePageSvg from '../../assets/Svg/HomePageSvg';
import AppointmentsSvg from '../../assets/Svg/AppointmentsSvg';
import MessageSvg from '../../assets/Svg/MessageSvg';
import KesfetSvg from '../../assets/Svg/KesfetSvg';
import { useNavigation } from '@react-navigation/native';

export default function AltBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HomePage')}>
        <HomePageSvg />
        <Text style={styles.text}>Anasayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Appointments')}>
        <AppointmentsSvg />
        <Text style={styles.text}>Randevular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Messages')}>
        <MessageSvg />
        <Text style={styles.text}>Mesajlar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DiscoverPage')}>
        <KesfetSvg />
        <Text style={styles.text}>Keşfet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute', 
    bottom: 0,           
    width: '100%',       
  },
  item: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#32475D',
  },
});

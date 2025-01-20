import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CalenderSvg2 from '../../assets/Svg/CalenderSvg2';  
import { useNavigation } from '@react-navigation/native'; 
export default function DoctorDetailsCard() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/Image/AliDoctor.png')} 
          style={styles.image} 
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>Ali Kemal Erdemoğlu</Text>
          <Text style={styles.specialty}>Nöroloji</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              <Image source={require('../../assets/Image/stars.png')} style={styles.starIcon} />
              <Image source={require('../../assets/Image/stars.png')} style={styles.starIcon} />
              <Image source={require('../../assets/Image/stars.png')} style={styles.starIcon} />
              <Image source={require('../../assets/Image/stars.png')} style={styles.starIcon} />
              <Image source={require('../../assets/Image/halfstars.png')} style={styles.starIcon} />
            </View>
            <Text style={styles.reviews}>12 Yorum</Text>
          </View>
          <View style={styles.socialIcons}>
            <Image source={require('../../assets/Image/linkedn.png')} style={styles.socialIcon} />
            <Image source={require('../../assets/Image/twitter.png')} style={styles.socialIcon} />
            <Image source={require('../../assets/Image/facebook.png')} style={styles.socialIcon} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.earliestAppointment}>En Erken Randevu</Text>
        <Text style={styles.time}>31-05-2024 / 15:00-15:30</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ServiceSelection')}  
      >
        <CalenderSvg2 width={20} height={20} style={styles.buttonIcon} />  
        <Text style={styles.buttonText}>Randevu Al</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C2744',
  },
  specialty: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2744',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 18,
    height: 18,
    marginRight: 2,
  },
  reviews: {
    fontSize: 14,
    color: '#1C2744',
    marginLeft: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  footer: {
    marginTop: 20,
    marginBottom: 15,
  },
  earliestAppointment: {
    fontSize: 15,
    color: '#22C55E',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 15,
    color: '#1C2744',
  },
  button: {
    backgroundColor: '#22C55E',
    paddingVertical: 15,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

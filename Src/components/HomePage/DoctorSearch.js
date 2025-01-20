import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DoctorCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Doktorlarla Görüş</Text>
        <Text style={styles.subtitle}>
          İş ağını genişletmek için doktorla tanış, kendi hastaneni kur.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doktor Ara</Text>
          <Icon name="navigate-next" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/Image/Doctor.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  backgroundColor: '#f7f9fc',
  borderRadius: 10,
  padding: 20,
  shadowColor: '#000', // Gölge rengi
  shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
  shadowOpacity: 0.2, // Opaklık: 20%
  shadowRadius: 3, // Blur: 3
  elevation: 3,
  marginHorizontal: 10,
  width: '90%',
  alignSelf: 'center',
  marginTop: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  image: {
    width: 100,
    height: 100,
    bottom:'5%',
  },
});

export default DoctorCard;

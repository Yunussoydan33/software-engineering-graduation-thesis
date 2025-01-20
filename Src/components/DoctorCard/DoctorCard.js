import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DoctorCard() {
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
                    <Text style={styles.location}>Kadıköy / İzmir</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.earliestAppointment}>En Erken Randevu</Text>
                    <Text style={styles.time}>10:00 AM   Yarın</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('DoctorDetails')}
                    >
                    <Text style={styles.buttonText}>İncele</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2744',
  },
  specialty: {
    fontSize: 15,
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
    width: 16,
    height: 16,
    marginRight: 2,
  },
  reviews: {
    fontSize: 13,
    color: '#1C2744',
    marginLeft: 8,
  },
  location: {
    fontSize: 14,
    color: '#6C7883',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  earliestAppointment: {
    fontSize: 14,
    color: '#22C55E',
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#1C2744',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#22C55E',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Doctors() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sağlık Elçileri Anlatıyor</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/yunus.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Yunus Soydan</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/Ali.jpeg')} style={styles.profileImage} />
          <Text style={styles.profileName}>Burak Özkul</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/cenk.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Cenk Timur</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/yunus.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Ali Veli</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/Ali.jpeg')} style={styles.profileImage} />
          <Text style={styles.profileName}>Selim Yılmaz</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/Image/cenk.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Uğurkan Demir</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FE',
    padding: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#7685AA',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 60,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 14,
    color: '#32475D',
    textAlign: 'center',
  },
});

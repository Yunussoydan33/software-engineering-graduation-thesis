import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PersonalInfoCard = () => {
  const [firstName, setFirstName] = useState('Yunus Emre');
  const [lastName, setLastName] = useState('SOYDAN');
  const [birthDate, setBirthDate] = useState('');
  const [education, setEducation] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Kişisel Bilgilerim</Text>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Ad</Text>
        <TextInput
          style={styles.value}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Adınızı girin"
          textAlign="left" 
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Soyad</Text>
        <TextInput
          style={styles.value}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Soyadınızı girin"
          textAlign="left" 
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Doğum Tarihi</Text>
        <TextInput
          style={styles.value}
          value={birthDate}
          onChangeText={setBirthDate}
          placeholder="Doğum tarihinizi girin"
          textAlign="left" 
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Eğitim</Text>
        <TextInput
          style={styles.value}
          value={education}
          onChangeText={setEducation}
          placeholder="Eğitim bilgilerinizi girin"
          textAlign="left" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7e8',
  },
  label: {
    fontSize: 16,
    color: '#333',
    width:160,
  },
  value: {
    fontSize: 16,
    color: '#666',
    flex: 1,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});

export default PersonalInfoCard;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ContactInfoCard = () => {
  const [phone, setPhone] = useState(' 0 (505) 844 37 88');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.title}>İletişim Bilgilerim</Text>
      <View style={styles.infoRow}>
        <FontAwesome name="phone" size={24} color="black" />
        <Text style={styles.label}>Telefon</Text>
        <TextInput
          style={styles.value}
          value={phone}
          onChangeText={setPhone}
          placeholder="Telefon numaranızı girin"
          textAlign="left"
        />
      </View>
      <View style={styles.infoRow}>
        <FontAwesome name="envelope" size={24} color="black" />
        <Text style={styles.label}>Mail</Text>
        <TextInput
          style={styles.value}
          value={email}
          onChangeText={setEmail}
          placeholder="Mail adresinizi girin"
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
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7e8',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    marginRight: 40,
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: '#666',
    flex: 2,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});

export default ContactInfoCard;

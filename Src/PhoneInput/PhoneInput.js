import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { countries } from '../data/countries';

export default function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity style={styles.countryItem} onPress={() => selectCountry(item)}>
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.dialCode}>{item.dial_code}</Text>
    </TouchableOpacity>
  );

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Telefon</Text>
      <View style={styles.phoneContainer}>
        <TouchableOpacity style={styles.flagContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.flag}>{selectedCountry.flag}</Text>
          <Text style={styles.dialCode}>{selectedCountry.dial_code}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="505 844 37 88"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={countries}
          keyExtractor={(item) => item.code}
          renderItem={renderCountryItem}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3F414E',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959FBA',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F9FDFE',
    width: '100%',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10,
    marginRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  flag: {
    fontSize: 24,
    marginRight: 5,
  },
  dialCode: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#3F414E',
    paddingVertical: 10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  countryName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  dialCode: {
    fontSize: 16,
  },
});

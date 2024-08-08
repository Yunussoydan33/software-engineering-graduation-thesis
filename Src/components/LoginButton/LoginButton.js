import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PhoneInput from '../../PhoneInput/PhoneInput';
import PasswordSvg from '../../assets/Svg/PasswordSvg';

export default function LoginButton({ onPress }) {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      <PhoneInput />
      <Text style={styles.label}>Şifre</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={isSecure}
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.icon}>
          <PasswordSvg />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Devam Et</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 0, 
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959FBA',
    borderRadius: 5,
    backgroundColor: '#F9FDFE',
    marginBottom: 40,
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#3F414E',
  },
  icon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

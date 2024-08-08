import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../Src/components/Header/Header';
import PasswordSvg from '../../Src/assets/Svg/PasswordSvg';
import { useNavigation } from '@react-navigation/native';

export default function Password() {
  const [isSecure, setIsSecure] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Şifre Oluştur" />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
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
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstScreen')}>
          <Text style={styles.buttonText}>Devam Et   →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959FBA',
    borderRadius: 5,
    backgroundColor: '#F9FDFE',
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
    paddingVertical: 18,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});


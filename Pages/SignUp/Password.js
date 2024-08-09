import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../../Src/components/Header/Header';
import PasswordSvg from '../../Src/assets/Svg/PasswordSvg';
import PasswordSeeSvg from '../../Src/assets/Svg/PaswordSeeSvg';
import { useNavigation } from '@react-navigation/native';

export default function Password() {
  const [isSecure, setIsSecure] = useState(true);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Şifre Oluştur" />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Şifrenizi girin"
                secureTextEntry={isSecure}
              />
              <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.icon}>
                {isSecure ? <PasswordSvg /> : <PasswordSeeSvg />}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstScreen')}>
            <Text style={styles.buttonText}>Devam Et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 50,
    paddingHorizontal: 35,
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
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
    paddingVertical: 17,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from '../../Src/components/Header/Header';
import PasswordSvg from '../../Src/assets/Svg/PasswordSvg';
import PasswordSeeSvg from '../../Src/assets/Svg/PaswordSeeSvg';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../Src/config';

export default function Password() {
  const [isSecure, setIsSecure] = useState(true);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const handleSignUp = async () => {
    const passwordRegex = /^\d{6}$/;
  
    if (!passwordRegex.test(password)) {
      Alert.alert("Hata", "Şifre tam olarak 6 haneli olmalıdır.");
      return;
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/signup`, { email: phoneNumber, password });
  
      Alert.alert(
        "Başarılı",
        "Hesabınız başarıyla oluşturuldu.",
        [
          {
            text: "Tamam",
            onPress: () => navigation.navigate('LoginPage'),
          },
        ]
      );
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Hesap oluşturulamadı!";
      Alert.alert("Hata", errorMessage);
    }
  };
  

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
                placeholder="6 haneli şifrenizi girin"
                secureTextEntry={isSecure}
                value={password}
                onChangeText={setPassword}
                keyboardType="numeric"
                maxLength={6}
              />
              <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.icon}>
                {isSecure ? <PasswordSvg /> : <PasswordSeeSvg />}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import PhoneInput from '../../PhoneInput/PhoneInput';
import PasswordSvg from '../../assets/Svg/PasswordSvg';
import PaswordSeeSvg from '../../assets/Svg/PaswordSeeSvg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../Src/config'; // Backend URL

export default function LoginButton() {
  const [isSecure, setIsSecure] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!phoneNumber || !password) {
      Alert.alert("Hata", "Telefon numarası ve şifre gereklidir.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: phoneNumber, // Telefon numarasını backend'de email alanına bağlıyoruz
        password: password,
      });

      Alert.alert("Başarılı", response.data.message, [
        {
          text: "Tamam",
          onPress: () => navigation.navigate('HomePage'),
        },
      ]);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Giriş işlemi başarısız!";
      Alert.alert("Hata", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <Text style={styles.label}>Şifre</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={isSecure}
          keyboardType="default"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.icon}>
          {isSecure ? <PasswordSvg /> : <PaswordSeeSvg />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Devam Et</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.footerText}>Üye Değil misiniz?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUp}> Hemen Üye Ol</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
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
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 70,
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
  signUp: {
    color: '#007BFF',
    fontSize: 14,
  },
});

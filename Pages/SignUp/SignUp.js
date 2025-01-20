import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Header from '../../Src/components/Header/Header';
import PhoneInput from '../../Src/PhoneInput/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../Src/config';

export default function SignUp() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGenerateOtp = async () => {
    const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
  
    try {
      const response = await axios.post(`${BASE_URL}/otp-generate`, { email: formattedNumber });
  
      Alert.alert(
        "Başarılı",
        `Doğrulama kodu telefon numaranıza gönderildi: ${formattedNumber}`,
        [
          {
            text: "Tamam",
            onPress: () => navigation.navigate('Verify', { phoneNumber: formattedNumber }),
          },
        ]
      );
    } catch (error) {
      const errorMessage = error.response?.data?.message || "OTP oluşturulamadı!";
      Alert.alert("Hata", errorMessage);
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <Header title="Hesap Oluştur" />
      <View style={styles.form}>
        <PhoneInput setPhoneNumber={setPhoneNumber} />
        <TouchableOpacity style={styles.button} onPress={handleGenerateOtp}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Zaten üye misiniz?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.loginText}> Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          Devam ederek, Evde Sağlık
          <Text style={styles.linkText}> Kullanım Şartları </Text>
          ve
          <Text style={styles.linkText}> Gizlilik Politikası</Text>'nı kabul etmiş olursunuz.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 20,
    padding: 35,
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    padding: 17,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#333',
    fontSize: 16,
  },
  loginText: {
    color: '#007BFF',
    fontSize: 16,
  },
  termsContainer: {
    paddingHorizontal: 35,
    paddingBottom: 30,
    alignItems: 'center',
  },
  termsText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
  },
});

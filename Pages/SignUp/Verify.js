import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from '../../Src/components/Header/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../Src/config';

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = code.join('');
  
    if (otpCode.length !== 6) {
      Alert.alert("Uyarı", "Lütfen 6 haneli kodu giriniz.");
      return;
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/otp-verify`, { email: phoneNumber, otp: otpCode });
  
      Alert.alert(
        "Başarılı",
        "Telefon numaranız başarıyla doğrulandı.",
        [
          {
            text: "Tamam",
            onPress: () => navigation.navigate('Password', { phoneNumber }),
          },
        ]
      );
    } catch (error) {
      const errorMessage = error.response?.data?.message || "OTP doğrulama başarısız!";
      Alert.alert("Hata", errorMessage);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Hesap Oluştur" />
        <View style={styles.content}>
          <Text style={styles.title}>6 Haneli Kodu Girin</Text>
          <Text style={styles.subtitle}>
            {phoneNumber} nolu cep telefonunuza {'\n'} mesaj olarak gelen 6 haneli kodu girin
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.changeNumber}>Telefon No’yu Değiştir</Text>
          </TouchableOpacity>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace' && index > 0 && !digit) {
                    inputRefs[index - 1].current.focus();
                  }
                }}
                textAlign="center"
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
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
    backgroundColor: '#F4F5F7',
  },
  content: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3F414E',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6B7280',
  },
  changeNumber: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../../Src/components/Header/Header';
import { useNavigation } from '@react-navigation/native';

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '']);
  const navigation = useNavigation();

  const handleInputChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Hesap Oluştur" />
        <View style={styles.content}>
          <Text style={styles.title}>4 Haneli Kodu Girin</Text>
          <Text style={styles.subtitle}>
            506 999 88 77 nolu cep telefonunuza {'\n'} mesaj olarak gelen 4 haneli kodu girin
          </Text>
          <TouchableOpacity>
            <Text style={styles.changeNumber}>Telefon No’yu Değiştir</Text>
          </TouchableOpacity>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Password')}>
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
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    marginTop: 50, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 23,
  },
  changeNumber: {
    color: '#007BFF',
    marginBottom: 40,
    fontSize: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    width: '80%',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#67729429',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: 'white',
    color: '#4285F4',  
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


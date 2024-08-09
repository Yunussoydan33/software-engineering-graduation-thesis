import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Header from '../../Src/components/Header/Header';
import PhoneInput from '../../Src/PhoneInput/PhoneInput';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();

  const showAlert = () => {
    Alert.alert(
      "We need to verify your number",
      "We need to make sure that +905058443788 is your number.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => navigation.navigate('Verify')
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Hesap Oluştur" />
      <View style={styles.form}>
        <PhoneInput />
        <TouchableOpacity style={styles.button} onPress={showAlert}>
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
          By continuing, you agree to Evde Sağlık 
          <Text style={styles.linkText}> Terms & Conditions </Text>
          and
          <Text style={styles.linkText}> Privacy Policy</Text>
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


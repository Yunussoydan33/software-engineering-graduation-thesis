import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PhoneInput from '../../PhoneInput/PhoneInput';
import PasswordSvg from '../../assets/Svg/PasswordSvg';
import PaswordSeeSvg from '../../assets/Svg/PaswordSeeSvg';
import { useNavigation } from '@react-navigation/native';

export default function LoginButton({ onPress }) {
  const [isSecure, setIsSecure] = useState(true);
  const navigation = useNavigation();

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
          {isSecure ? <PasswordSvg /> : <PaswordSeeSvg />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Verify')} style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Devam Et</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.footerText}>Üye Değil misiniz?</Text>
        <TouchableOpacity onPress={() => {/* Üye Ol sayfasına yönlendirme */}}>
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

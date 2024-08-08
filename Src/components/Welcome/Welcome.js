import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Zuplink</Text>
      <Text style={styles.title}>Kendi doktor{'\n'}ağını oluştur</Text>
      <Image source={require('../../../Src/assets/Image/First.png')} style={styles.imagePlaceholder} />
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.createButtonText}>Hesap Oluştur   →</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.loginButtonText}>Giriş Yap   →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 300,
    marginBottom: 60,
    resizeMode: 'contain',
  },
  createButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loginButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#060606',
    fontSize: 16,
    textAlign: 'center',
  },
});


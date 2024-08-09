import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Welcome({ navigation }) {
  const images = [
    { src: require('../../../Src/assets/Image/First.png'), text: 'Kendi Doktor Ağını oluştur' },
    { src: require('../../../Src/assets/Image/second.png'), text: 'Sağlık Elçisi Ol' },
    { src: require('../../../Src/assets/Image/third.png'), text: 'Hem kazan hem yaşat' },
  ];

  const [currentText, setCurrentText] = useState(images[0].text);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(scrollPosition / 310); 
    setCurrentText(images[currentIndex].text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Zuplink</Text>
      <Text style={styles.title}>{currentText}</Text>
      <View style={styles.carouselContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false} 
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <Image key={index} source={image.src} style={styles.imagePlaceholder} />
          ))}
        </ScrollView>
      </View>
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
    marginBottom: 50,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 20,
  },
  carouselContainer: {
    height: 300, 
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 350, 
    height: 300,
    resizeMode: 'contain',
    marginHorizontal: 10, 
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

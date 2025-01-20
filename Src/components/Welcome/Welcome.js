import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Welcome({ navigation }) {
  const images = [
    { src: require('../../../Src/assets/Image/First.png'), textTop: 'Kendi Doktor', textBottom: 'Ağını Oluştur' },
    { src: require('../../../Src/assets/Image/second.png'), textTop: 'Sağlıkların Elçisi ', textBottom: 'Ol' },
    { src: require('../../../Src/assets/Image/third.png'), textTop: 'Hem Kazan', textBottom: 'Hem Yaşat' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / 310); 
    setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Yunus Soydan</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTop}>{images[currentIndex]?.textTop || '...'}</Text>
        <Text style={styles.titleBottom}>{images[currentIndex]?.textBottom || '...'}</Text>
      </View>
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
        <View style={styles.indicatorContainer}>
          {images.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.indicator, 
                currentIndex === index && styles.activeIndicator
              ]} 
            />
          ))}
        </View>
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
  titleContainer: {
    marginBottom: 20,
    width: '100%',
  },
  titleTop: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titleBottom: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  carouselContainer: {
    height: 300, 
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 365, 
    height: 300,
    resizeMode: 'contain',
    marginHorizontal: 10, 
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
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

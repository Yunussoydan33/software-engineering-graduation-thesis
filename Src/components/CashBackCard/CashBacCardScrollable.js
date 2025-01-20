import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CashBacCardScrollable() {
  const navigation = useNavigation();
  
  const images = [
    { image: 'https://zupsie.vercel.app/static/media/card4.2d1eeb733a7b2a2929ea.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card1.836f165af44f3142fd88.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card5.125adb0874e3ac7eba31.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card3.11d74c8172284c762f8f.jpg' },
  ];

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth * 0.9;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Birlikte satın al</Text>
      <View style={[styles.card, { width: cardWidth }]}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth}
          decelerationRate="fast"
          contentContainerStyle={styles.scrollContainer}
        >
          {images.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => navigation.navigate('CashBack')} // Burada yönlendirme yapıyoruz
            >
              <Image 
                source={{ uri: item.image }} 
                style={[styles.image, { width: cardWidth - 40 }]} 
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.timer}>Arda ve DR.Ercan ile Özgüven Yolculuğu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    alignItems: 'center',  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#7685AA',
    alignSelf: 'flex-start',
    marginLeft: 20, 
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
    shadowOpacity: 0.2, // Opaklık: 20%
    shadowRadius: 3, // Blur: 3
    elevation: 3,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  timer: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7685AA',
    textAlign: 'center',
  },
});


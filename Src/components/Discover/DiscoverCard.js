import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DiscoverCard() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.card}>
        <Image source={require('../../assets/Image/doktor.jpeg')} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>%40 İndirim</Text>
        </View>
        <Text style={styles.title}>Yeni Sağlık Elçilerine Özel</Text>
        <Text style={styles.subtitle}>Hoşgeldin Paketi</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Image/doktorr.jpeg')} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>%40 İndirim</Text>
        </View>
        <Text style={styles.title}>Yeni Sağlık Elçilerine Özel</Text>
        <Text style={styles.subtitle}>Hoşgeldin Paketi</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Image/doktor3.jpeg')} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>%40 İndirim</Text>
        </View>
        <Text style={styles.title}>Yeni Sağlık Elçilerine Özel</Text>
        <Text style={styles.subtitle}>Hoşgeldin Paketi</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    alignItems: 'flex-start', 

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 14,
    overflow: 'hidden',
    width: 400, 
    alignItems: 'center',
    
  },
  image: {
    width: '100%',
    height: 150,
  },
  discountContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

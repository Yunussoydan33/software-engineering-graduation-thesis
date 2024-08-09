import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', image: require('../../assets/Image/doktorr.jpeg') },
  { id: '2', image: require('../../assets/Image/doktor.jpeg') },
  { id: '3', image: require('../../assets/Image/doktor3.jpeg') },
];

export default function DiscoverCard() {
  return (
    <FlatList
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={width * 0.8 + 14}
      initialScrollIndex={1} // Ortadaki kartın açılışta görünmesi için
      getItemLayout={(data, index) => (
        { length: width * 0.8 + 14, offset: (width * 0.8 + 14) * index, index }
      )}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>%40 İndirim</Text>
          </View>
          <Text style={styles.title}>Yeni Sağlık Elçilerine Özel</Text>
          <Text style={styles.subtitle}>Hoşgeldin Paketi</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: (width - (width * 0.8)) / 2, // Kartları tam ortaya hizalamak için
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 7,
    overflow: 'hidden',
    width: width * 0.8, // Kart genişliği ekran genişliğinin %80'i olacak
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
  },
  discountContainer: {
    position: 'absolute',
    top: 20,
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

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ScoreCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/Image/Score.png')}  // Yüklediğiniz resmi buradan çekiyoruz
          style={styles.scoreImage}
        />
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <View style={[styles.dot, { backgroundColor: '#F7B267' }]} />
            <Text style={styles.detailText}>%70 Dokümanlar</Text>
          </View>
          <View style={styles.detailItem}>
            <View style={[styles.dot, { backgroundColor: '#B0E3F9' }]} />
            <Text style={styles.detailText}>%30 Profile</Text>
          </View>
          <View style={styles.detailItem}>
            <View style={[styles.dot, { backgroundColor: '#E6EAF5' }]} />
            <Text style={styles.detailText}>%30 Randevular</Text>
          </View>
          <View style={styles.detailItem}>
            <View style={[styles.dot, { backgroundColor: '#5D9CEC' }]} />
            <Text style={styles.detailText}>%30 Ciro</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
    alignSelf: 'center',
    width: '90%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  details: {
    marginLeft: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Yazılar arasındaki boşluğu artırmak için bu değeri güncelledim
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 55,
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ScoreCard;

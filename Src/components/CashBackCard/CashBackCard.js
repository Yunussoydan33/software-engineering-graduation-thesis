import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CashBackCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(19 * 3600 + 23 * 60 + 57); // 19 saat 23 dakika 57 saniyeden başlar
  const navigation = useNavigation();

  const carouselItems = [
    { image: 'https://zupsie.vercel.app/static/media/card4.2d1eeb733a7b2a2929ea.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card1.836f165af44f3142fd88.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card5.125adb0874e3ac7eba31.jpg' },
    { image: 'https://zupsie.vercel.app/static/media/card3.11d74c8172284c762f8f.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % carouselItems.length;
    setActiveIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    setActiveIndex(prevIndex);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={goToPrevious} style={styles.navButtonLeft}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Image source={{ uri: carouselItems[activeIndex].image }} style={styles.image} />
        <TouchableOpacity onPress={goToNext} style={styles.navButtonRight}>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {/* Resim hariç alt bölümü buton yapıyoruz */}
      <TouchableOpacity onPress={() => navigation.navigate('CashBackInfo')} style={styles.infoContainer}>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        <Text style={styles.title}>Arda ve DR.Ercan ile Özgüven Yolculuğu</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Kilit Açılımı <Text style={styles.bold}>25 kişi</Text></Text>
          <Text style={styles.participation}>%80 katılım</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon name="person" size={20} color="#000" />
          <Text style={styles.infoText}>Güzellik Koçu</Text>
          <Text style={styles.bold}>Arda Bektaş</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Icon name="medkit" size={20} color="#000" />
          <Text style={styles.infoText}>Estetik Cerrah</Text>
          <Text style={styles.bold}>AHMET ERCAN DEMİRAY</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Icon name="location" size={20} color="#000" />
          <Text style={styles.infoText}>Yer Bilgisi</Text>
          <Text style={styles.bold}>İstanbul</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Icon name="cash" size={20} color="#000" />
          <Text style={styles.infoText}>Cashback</Text>
          <Text style={styles.bold}>10%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Icon name="analytics" size={20} color="#000" />
          <Text style={styles.infoText}>Mali Avantaj</Text>
          <Text style={styles.bold}>5 yılda - 54.450 TL</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Icon name="stats-chart" size={20} color="#000" />
          <Text style={styles.infoText}>Kazanç ve Yatırım Bilgisi</Text>
          <Text style={styles.bold}>Özgüven ve Kar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 16,
    margin: 16,
    width: width * 0.9,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 500,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  navButtonLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  navButtonRight: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
    padding: 10,
  },
  timer: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    color: 'purple',
    marginVertical: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  progressText: {
    fontSize: 16,
  },
  participation: {
    fontSize: 16,
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    width: '80%',
    height: '100%',
    backgroundColor: 'green',
  },
  infoContainer: {
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  separator: {
    height: 0.3,
    backgroundColor: '#000',
    width: '100%',
    marginVertical: 4,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  },
  bold: {
    fontSize: 13,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
});

export default CashBackCard;

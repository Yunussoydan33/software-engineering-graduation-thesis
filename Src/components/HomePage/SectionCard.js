import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const sections = [
  {
    title: 'En Yeni Estetik Trendleri',
    description: 'Doktor Görüşleri ve hasta hikayeleri',
    icon: require('../../assets/Image/trends.jpg'),
  },
  {
    title: 'Popüler Kozmetik Prosedürleri',
    description: 'Liposectiondan, burun ameliyatına',
    icon: require('../../assets/Image/trends.jpg'),
  },
];

const moreSections = [
  {
    title: 'Yeni Estetik Trendleri 2',
    description: 'Doktor Görüşleri ve hasta hikayeleri 2',
    icon: require('../../assets/Image/trends.jpg'),
  },
  {
    title: 'Popüler Kozmetik Prosedürleri 2',
    description: 'Liposectiondan, burun ameliyatına 2',
    icon: require('../../assets/Image/trends.jpg'),
  },
];

const SectionCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Öğren</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.bottoom}>
          {sections.map((section, index) => (
            <TouchableOpacity key={index} style={[styles.card, { width: screenWidth * 0.85 }]}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{section.title}</Text>
                <Text style={styles.description}>{section.description}</Text>
              </View>
              <Image source={section.icon} style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottoom}>
          {moreSections.map((section, index) => (
            <TouchableOpacity key={index} style={[styles.card, { width: screenWidth * 0.85 }]}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{section.title}</Text>
                <Text style={styles.description}>{section.description}</Text>
              </View>
              <Image source={section.icon} style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: '94%',
    marginTop: 20,
    paddingRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  bottoom: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});

export default SectionCard;
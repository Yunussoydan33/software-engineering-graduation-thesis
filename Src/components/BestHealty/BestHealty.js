import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BestHealty = () => {
  const [showMore, setShowMore] = useState(false);

  const additionalPeople = [
    { rank: '13.', initials: 'CK', name: 'Cenk Korkmaz', score: 23 },
    { rank: '14.', initials: 'MK', name: 'Mehmet Kılıç', score: 21 },
    { rank: '15.', initials: 'AS', name: 'Ayşe Sönmez', score: 17 },
    { rank: '16.', initials: 'FG', name: 'Fatma Güner', score: 15 },
    { rank: '17.', initials: 'HK', name: 'Hakan Kaya', score: 11 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Global En iyi 10 Sağlık Elçisi</Text>
      
      <View style={styles.card}>
        <Text style={styles.rank}>1.</Text>
        <Image source={require('../../assets/Image/deniz.png')} style={styles.profileImage} />
        <Text style={styles.name}>Deniz Dinçer</Text>
        <View style={styles.scoreContainer}>
          <Image source={require('../../assets/Image/medal.png')} style={styles.medal} />
          <Text style={styles.score}>97</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.rank}>2.</Text>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>AG</Text>
        </View>
        <Text style={styles.name}>Ahmet Gürsoy</Text>
        <View style={styles.scoreContainer}>
          <Image source={require('../../assets/Image/medal.png')} style={styles.medal} />
          <Text style={styles.score}>90</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.rank}>3.</Text>
        <Image source={require('../../assets/Image/hasan.png')} style={styles.profileImage} />
        <Text style={styles.name}>Hasan Karasakal</Text>
        <View style={styles.scoreContainer}>
          <Image source={require('../../assets/Image/medal.png')} style={styles.medal} />
          <Text style={styles.score}>84</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.rank}>4.</Text>
        <Image source={require('../../assets/Image/simge.png')} style={styles.profileImage} />
        <Text style={styles.name}>Simge Naz Laleli</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>81</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.rank}>5.</Text>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>TZ</Text>
        </View>
        <Text style={styles.name}>Tezer Zinet</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>73</Text>
        </View>
      </View>

      <View style={[styles.card, styles.currentUserCard]}>
        <Text style={styles.rank}>12.</Text>
        <Image source={require('../../assets/Image/yunus.png')} style={styles.profileImage} />
        <Text style={styles.name}>Yunus Soydan</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.currentUserScore}>24</Text>
        </View>
      </View>

      {showMore && additionalPeople.map((person, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.rank}>{person.rank}</Text>
          <View style={styles.initialsContainer}>
            <Text style={styles.initials}>{person.initials}</Text>
          </View>
          <Text style={styles.name}>{person.name}</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{person.score}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Image
          source={require('../../assets/Image/alt.png')}  // Oku temsil eden resim
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FE',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    paddingTop: 40,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'left',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  initialsContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  initials: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medal: {
    width: 20,
    height: 33,
    marginRight: 5,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  currentUserCard: {
    borderWidth: 1,
    borderColor: '#5D9CEC',
  },
  currentUserScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D9CEC',
  },
  arrow: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default BestHealty;

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Score = () => {
  const score = 24;
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ScoreDetailsPage')}>
      <View style={styles.header}>
      <Image
          source={require('../../assets/Image/yunus.png')} // yunus.png'yi ekliyoruz
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Merhaba,</Text>
          <Text style={styles.name}>Yunus Emre SOYDAN</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.body}>
        <Image
          source={require('../../assets/Image/score.jpg')} 
          style={styles.scoreImage}
        />
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Skorun</Text>
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f7f9fc",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000", // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
    shadowOpacity: 0.2, // Opaklık: 20%
    shadowRadius: 3, // Blur: 3
    elevation: 3,
    marginHorizontal: 10,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 16,
    color: "#333",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e6e7e8",
    marginVertical: 10,
  },
  body: {
    alignItems: "center",
  },
  scoreImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius:100,
    marginTop:10,
  },
  scoreContainer: {
    position: "absolute",
    top: "40%",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 16,
    color: "#333",
  },
  score: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Score;

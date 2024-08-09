import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Score = () => {
  const score = 24;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://s3-alpha-sig.figma.com/img/0932/525e/492ac655666d5afd806861cc7baa49a9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFOwCMEXMgqfxUYqXjjDUqzo-EMqwDScKvXPYA9HW8TvPNmnpNaQDKKlSkLZp1kfO88DUUuAuhS7rpKJa5LjeHGFWhqyaPrsSXBinGvD8RQUjTmjUJHI65BRJ6z4LEhpBScBqNCYz5-PZbB5il0SvXvT7SDXhd9OI5nf2JPcqpSYsdDg2gJ3A-BLcRAxypkS7M7TWVXIDSY7uvdwGb-cPzYO2-MZf0LwhN60o3SGRZsOejQhwolxoOM0rngpDQI2Sf6ChkW14moQh62nYfK2KFe4zU5U4f01orR97r6s-S9lJ2pnXlZU49Y8upHCot-iv9oWrE1h8n9wPyo5fMw6xw__" }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Merhaba,</Text>
          <Text style={styles.name}>Vuslat Coşkun</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f7f9fc",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
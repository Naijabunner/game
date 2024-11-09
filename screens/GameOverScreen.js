import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import Title from "../componenets/ui/Title";
import PrimaryButton from "../componenets/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={style.rootContainer}>
      <Title>game over</Title>
      <View style={style.imageContainer}>
        <Image style={style.image} source={require("../assets/success.png")} />
      </View>
      <Text style={style.textSummary}>
        Your phone needed
        <Text style={style.Highlight}>{roundsNumber}</Text>
        rounds to guess the number
        <Text>{userNumber}</Text>.
      </Text>
      <PrimaryButton onpress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width
const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textSummary: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 14,
  },
  Highlight: {
    color: Colors.primary500,
  },
});

export default GameOverScreen;

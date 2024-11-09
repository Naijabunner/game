import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading'
export default function App() {
  const [userNumber, setuserNumber] = useState("");
  const [isOver, setisOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

const [fontsLoaded]=useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})

if (!fontsLoaded) {
  return <AppLoading />;
}


  const gameIsOver=(numberOfROunds)=>{
    setisOver(true)
    setGuessRounds(numberOfROunds)
  }
  const pickedNumberHandler = (pickedNumber) => {
    setuserNumber(pickedNumber);
    setisOver(false)
  };

  const startNewGameHandler=()=>{
    setuserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}  />;

 

  if (!isOver && userNumber) {
    screen = <GameScreen pickedNumber={userNumber} onGameOver={gameIsOver}/>;
  }

  if (isOver && userNumber) {
    screen= <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }
  return (
    <>
    <StatusBar/>
    <LinearGradient style={styles.rootScreen} colors={[ Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require("./assets/backgrounddice.png")}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
   
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

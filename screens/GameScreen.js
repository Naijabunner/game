import React, { useEffect, useState } from 'react'
import { Alert, FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import Title from '../componenets/ui/Title'
import NumberContainer from '../componenets/Game/NumberContainer';
import PrimaryButton from '../componenets/ui/PrimaryButton';
import Card from '../componenets/ui/Card';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../componenets/Game/GuessLogItem'

function generateRandomBetween(min,max,exclude){
    const rndNum =Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

let minBoundary =1;
let maxBoundary =100;

const GameScreen = ({ pickedNumber, onGameOver}) => {
    const initialGuess= generateRandomBetween(1 ,100 ,pickedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds]=useState([])
    useEffect(()=>{
        if (currentGuess === pickedNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, pickedNumber, onGameOver])


    useEffect(()=>{
        minBoundary =1,
        maxBoundary =100;
    },[])


    const nextGuessHandler = (direction) => {
      //check if user lied
      if (
        (direction === "lower" && currentGuess < pickedNumber) ||
        (direction === "higher" && currentGuess > pickedNumber)
      ) {
        Alert.alert("Lying user", "Why are you lying???", [
          { text: "Sorry", style: "cancel" },
        ]);
        return;
      }

      if (direction === "lower") {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }

      const newRndNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newRndNumber);
      setGuessRounds(prev=> [newRndNumber, ...prev ])
    };


    const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
        <Title style={styles.title}>Opponent Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
             <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onpress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='remove' size={24} color={'white'}/>
          </PrimaryButton>
        <PrimaryButton onpress={ nextGuessHandler.bind(this,'higher')}>
        <Ionicons name='add' size={24} color={'white'}/>
        </PrimaryButton>    

        </View>
        </View>
        </Card>
       
        <View style={{ flex:1, padding:16}}>
    {/* Log rounds */}
  
        <FlatList data={guessRounds} renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundsListLength- itemData.index} guess={itemData.item}/>}
        keyExtractor={(item)=> item}
        />
   
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:50
    },
})
export default GameScreen
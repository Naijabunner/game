import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../componenets/ui/PrimaryButton";
import { Colors } from "../constants/colors";
import Title from "../componenets/ui/Title";
import Card from "../componenets/ui/Card";

const StartGameScreen = ({ onPickNumber }) => {
  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputNumber) => {
    setEnteredNumber(inputNumber);
  };

  const ResetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputBtn = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "try again", [
        { text: "Okay", style: "destructive", onPress: ResetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.inputInstructions}>Enter a number</Text>
            <TextInput
              style={styles.numberInput}
              value={enteredNumber}
              maxLength={2}
              keyboardType='number-pad'
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonContainer}>
              <View style={{ flex: 1 }}>
                <PrimaryButton onpress={ResetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryButton onpress={confirmInputBtn}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //  marginTop: 100,
    alignItems: "center",
  },
  inputInstructions: {
    color: Colors.accent500,
    fontSize: 24,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    padding: 16,
    backgroundColor: Colors.primary800,
  },
  numberInput: {
    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    color: Colors.accent500,
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: "row",
    gap: 5,
  },
});

export default StartGameScreen;

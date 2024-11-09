import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/colors';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
      justifyContent:'center',
      alignItems:'center',
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
  });
export default Card
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )

}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:50
    },
    title:{
      fontFamily:'OpenSans',
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        borderColor:'white',
        borderWidth:2,
        padding:12,
        textAlign:'center',
    }
})

export default Title
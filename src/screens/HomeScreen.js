import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Title from '../components/Title'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Title text="Home Screen"/>
            <Button 
                title = "Go to Image Screen"
                onPress = {() => navigation.navigate("Image")}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

// rnfes
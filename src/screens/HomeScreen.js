import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Title from '../components/Title'
import navigationPaths from '../navigation/navigationPaths'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Title text="Home Screen"/>
            <Button 
                title = "Go to Image Screen"
                onPress = {() => navigation.navigate(navigationPaths.imageScreen)}
            />
             <Button 
                title = "Go to Counter Screen"
                onPress = {() => navigation.navigate(navigationPaths.counterScreen)}
            />
              <Button 
                title = "Go to Effect Screen"
                onPress = {() => navigation.navigate(navigationPaths.effectScreen)}
            />
             <Button 
                title = "Go to Sender Screen"
                onPress = {() => navigation.navigate(navigationPaths.senderSceen)}
            />
             <Button 
                title = "Go to Receiver Screen"
                onPress = {() => navigation.navigate(navigationPaths.receiverScreen)}
            />
            <Button 
                title = "Go to Api Screen"
                onPress = {() => navigation.navigate(navigationPaths.apiScreen)}
            />
             <Button 
                title = "Go to Layout Screen"
                onPress = {() => navigation.navigate(navigationPaths.layoutScreen)}
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
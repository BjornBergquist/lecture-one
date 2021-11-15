import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import Title from '../components/Title'
import navigationPaths from '../navigation/navigationPaths'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Title text="Home Screen"/>
            <Button 
                title = "Go to Image Screen"
                onPress = {() => navigation.navigate(navigationPaths.imageScreen)}
                buttonStyle={styles.buttonStyle}
            />
             <Button 
                title = "Go to Counter Screen"
                onPress = {() => navigation.navigate(navigationPaths.counterScreen)}
                buttonStyle={styles.buttonStyle}
            />
              <Button 
                title = "Go to Effect Screen"
                onPress = {() => navigation.navigate(navigationPaths.effectScreen)}
                buttonStyle={styles.buttonStyle}
            />
             <Button 
                title = "Go to Sender Screen"
                onPress = {() => navigation.navigate(navigationPaths.senderSceen)}
                buttonStyle={styles.buttonStyle}
            />
             <Button 
                title = "Go to Receiver Screen"
                onPress = {() => navigation.navigate(navigationPaths.receiverScreen)}
                buttonStyle={styles.buttonStyle}
            />
            <Button 
                title = "Go to Api Screen"
                onPress = {() => navigation.navigate(navigationPaths.apiScreen)}
                buttonStyle={styles.buttonStyle}
            />
             <Button 
                title = "Go to Layout Screen"
                onPress = {() => navigation.navigate(navigationPaths.layoutScreen)}
                buttonStyle={styles.buttonStyle}
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
    buttonStyle:{
        backgroundColor:"#37D", 
        margin:10
    }
  });

// rnfes
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

const EffectScreen = () => {
    const [message, setMessage] = useState("Default")
    useEffect(() => {
        console.log("Load")
        setInterval(() => {
            console.log("2 sec")
        }, 2000);
        return ()=>{
            console.log("Return: ")
        }
    }, [])
    return (
        <View>
            <Text>{message}</Text>
            <TextInput 
                value={message}
                onChangeText={setMessage}
            />
        </View>
    )
}

export default EffectScreen

const styles = StyleSheet.create({})

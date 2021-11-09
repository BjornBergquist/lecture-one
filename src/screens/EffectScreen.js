import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

const EffectScreen = () => {
    const [message, setMessage] = useState("Default")
    useEffect(() => {
        console.log("Load")
        const timer = setInterval(() => {
            console.log("2 sekunder")
        }, 2000);
        return ()=>{
            console.log("Unload")
            clearInterval(timer)
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
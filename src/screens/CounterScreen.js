import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Text style={{fontSize: 64, textAlign:"center"}}>{counter}</Text>
            <Button title="Increase" onPress={() => setCounter(counter + 1)} />
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})

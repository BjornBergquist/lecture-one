import React, {useReducer} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function reducer (state, action){
    // action.type
    // action.payload
    switch (action.type){
        case "increment":
            return {...state, count: state.count + 1}
        case "increment_by_value":
            return {...state, count: state.count + action.payload}
        case "decrement": 
            return {...state, count: (state.count > 0 ? state.count - 1 : 0)}
        default: 
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <View>
            <Text style={{fontSize: 64, textAlign:"center"}}>{state.count}</Text>
            <Button title="Increase" onPress={() => dispatch({type: "increment_by_value", payload: 10})} />
            <Button title="Decrease" onPress={() => dispatch({type: "decrement"})} />
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})

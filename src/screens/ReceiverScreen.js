import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MessageContext } from '../shared/provider/MessageProvider'

const ReceiverScreen = () => {
    const [message] = useContext(MessageContext)
    return (
        <View>
            <Text>{message}</Text>
        </View>
    )
}

export default ReceiverScreen

const styles = StyleSheet.create({})

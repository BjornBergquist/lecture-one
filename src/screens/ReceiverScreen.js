import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MessageContext } from '../shared/provider/MessageProvider'

const ReceiverScreen = () => {
    const [state] = useContext(MessageContext)
    return (
        <View>
            <Text>{state.message}</Text>
            <Text>{state.count} new messages</Text>
        </View>
    )
}

export default ReceiverScreen

const styles = StyleSheet.create({})

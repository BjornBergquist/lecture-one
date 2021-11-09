import React, {useContext} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { MessageContext } from '../shared/provider/MessageProvider'

const SenderScreen = () => {
    const [message, setMessage] = useContext(MessageContext)
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

export default SenderScreen

const styles = StyleSheet.create({})

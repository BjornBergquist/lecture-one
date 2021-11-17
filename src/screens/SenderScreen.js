import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { MessageContext } from '../shared/provider/MessageProvider'

const SenderScreen = () => {
    const [state, dispatch] = useContext(MessageContext)
    const [localMessage, setlocalMessage] = useState("")
    return (
        <View>
            <Text>{localMessage}</Text>
            <TextInput 
                value={localMessage}
                onChangeText={setlocalMessage}
            />
        <Button 
            title="Send"
            onPress={() => dispatch({type: "set_message", payload: localMessage})}
        />
        </View>
    )
}

export default SenderScreen

const styles = StyleSheet.create({})

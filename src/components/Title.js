import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = ({text}) => {
    return (
        <Text style={styles.titleStyle}>
            {text}
        </Text>
    )
}

export default Title

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        textAlign: "center"
    }
})
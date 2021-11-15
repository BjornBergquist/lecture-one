import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LayoutScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}></View>
            <View style={styles.child2}></View>
            <View style={styles.child3}></View>
            <View style={styles.child4}></View>
        </View>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }, 
    child1:{
        backgroundColor: "green",
        minWidth: 100,
        minHeight: 100,
        alignSelf: "center",
    },
    child2:{
        backgroundColor: "pink",
        minWidth: 100,
        height: 100,
    },
    child3:{
        backgroundColor: "grey",
        minWidth: 100,
        height: 100,
    },
    child4:{
        backgroundColor: "lightblue",
        minWidth: 100,
        height: 100,
    },

})

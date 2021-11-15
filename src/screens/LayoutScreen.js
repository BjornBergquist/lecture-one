import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import testStyle from '../shared/utils/testStyle'

const LayoutScreen = () => {
    const window = useWindowDimensions()
    const landscape = window.width > window.height

    const display = () =>{
        if (landscape) {
            return <Text>Landscape</Text>
        } else {
            return ( <Text> Test </Text>
           )  
        }
    }

    return ( <View style={{...testStyle.background, ...styles.parent}}>
    {/* <View style={styles.child1}></View>
    <View style={styles.child2}></View>
    <View style={styles.child3}></View>
    <View style={styles.child4}></View> */}
    <Text>Height: {window.height}</Text>
    <Text>Width: {window.width}</Text>
    <Text>Scale: {window.scale}</Text>
    <Text>FontScale: {window.fontScale}</Text>
    <Text>Aspect-ratio: {window.height/window.width}</Text>
    <Text>Aspect-ratio: {16/9}</Text>
    <Text style={landscape?styles.landscape:styles.portrait}>{landscape?"Landscape orientation":"Portrait orientation"}</Text>
  
</View> )
}

export default LayoutScreen

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }, 
    parentWide:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    landscape:{
        color: "blue"
    },
    portrait:{
        color: "red"
    },
    child1:{
        backgroundColor: "green",
        minWidth: 100,
        minHeight: 100,
        aspectRatio: 4/3, 
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

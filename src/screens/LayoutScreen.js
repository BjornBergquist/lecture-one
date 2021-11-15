import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Platform } from 'react-native'
import testStyle from '../shared/utils/testStyle'

const LayoutScreen = () => {
    // const window = useWindowDimensions()
    const {height, width, scale, fontScale} = useWindowDimensions()
    const landscape = width > height

    const displayOsSpecific = () => {
        if(Platform.OS === "ios"){
            return (<Text>This will only be shown on IOS</Text>)
        } else {
            return (
                <View>
                    <Text>This will be shown on Android</Text>
                    <View style={styles.child1}></View>
                </View>)
        }
    }

    return ( <View style={{...testStyle.background, ...styles.parent}}>
    {/* <View style={styles.child1}></View>
    <View style={styles.child2}></View>
    <View style={styles.child3}></View>
    <View style={styles.child4}></View> */}
    <Text>Height: {height}</Text>
    <Text>Width: {width}</Text>
    <Text>Scale: {scale}</Text>
    <Text>FontScale: {fontScale}</Text>
    <Text>Aspect-ratio: {height/width}</Text>
    <Text>Aspect-ratio: {16/9}</Text>
    <Text style={landscape?styles.landscape:styles.portrait}>{landscape?"Landscape orientation":"Portrait orientation"}</Text>
    {displayOsSpecific()}
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

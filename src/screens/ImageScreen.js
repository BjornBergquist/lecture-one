import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'

const ImageScreen = () => {
    return (
        <ScrollView>
            <Image source={require('../../assets/Forest.jpg')} />
            <Image source={{uri:"https://source.unsplash.com/480x320/?nature", height:320, width: 480}} />
            <Image source={require('../../assets/Hills.jpg')} />
        </ScrollView>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})

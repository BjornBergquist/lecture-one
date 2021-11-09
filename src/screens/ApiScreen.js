import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import pokemonApiService from '../shared/api/service/pokemonApiService'
import { useDebounce } from '../shared/hooks/useDebounce'

const ApiScreen = () => {
    const [serverData, setServerData] = useState()
    const [searchTerm, setSearchTerm] = useState("")
    const deboucedTerm = useDebounce(searchTerm, 500)

    const fetchData = async () => {
        try {
            const {data} = await pokemonApiService.searchPokemon(deboucedTerm)
            setServerData(data)
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [deboucedTerm])

    const displayData = () => {
        if (serverData){
            return (
                <>
                    <Text>{serverData?.name}</Text>
                    <Image source={{
                        uri: serverData?.sprites?.front_default,
                        height: 200,
                        width: 200,
                    }}/>
                </>
            )
        } else {
            return (
                <Text>Loading...</Text>
            )
        }
    }

    return (
        <View>
            <Text>Api Screen</Text>
            {displayData()}
            <TextInput 
                onChangeText={setSearchTerm}
                value={searchTerm}
                placeholder="Search for a pokemon"
            />
        </View>
    )
}

export default ApiScreen

const styles = StyleSheet.create({})

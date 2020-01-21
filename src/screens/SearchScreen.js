import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar term={term} onTermSubmit={() => searchApi()} onTermChange={(newTerm)=>{
                setTerm(newTerm)
            }}/>
            {errorMessage ? <Text> {errorMessage}</Text> : null}
            <Text>
                Found {results.length} results.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({

})

export default SearchScreen


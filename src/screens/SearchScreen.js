import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: term,
                    location: 'istanbul'
                }
            });

            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }

    }

    useEffect(() => {
        searchApi('pasta');
    }, [])
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


import {useEffect, useState} from 'react'
import yelp from '../../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term) => {
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

    return [searchApi, results, errorMessage]
}


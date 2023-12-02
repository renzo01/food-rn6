import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
            limit : 50,
            term : searchTerm,
            location : 'san jose'
            }
        });
        setBusinesses(response.data.businesses);
        } catch (error) {
        setErrorMessage('Something goes wrong');
        }
    }
    //just execute call service one time
    useEffect(() => {
        searchApi('pasta')
    },[]);
    return [searchApi, businesses, errorMessage];
};
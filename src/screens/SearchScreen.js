import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterBusinessesByPrice = (price) => {
    return businesses.filter(result => {
      return result.price === price;
    })
  }

  return (
    <>
      <SearchBar 
        term = {term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessesList businesses={filterBusinessesByPrice('$')} title = 'Cost Effective' navigation={navigation}/>
        <BusinessesList businesses={filterBusinessesByPrice('$$')} title = 'Bit Pricier' navigation={navigation}/>
        <BusinessesList businesses={filterBusinessesByPrice('$$$')} title = 'Big Spender'navigation={navigation}/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
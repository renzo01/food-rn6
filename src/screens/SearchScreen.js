import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultList from '../components/BusinessesList';

const SearchScreen = () => {
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
        <ResultList businesses={filterBusinessesByPrice('$')} title = 'Cost Effective'/>
        <ResultList businesses={filterBusinessesByPrice('$$')} title = 'Bit Pricier' />
        <ResultList businesses={filterBusinessesByPrice('$$$')} title = 'Big Spender'/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
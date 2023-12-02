import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    console.log(result);
    const id = navigation.getParam('id');
    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResults(id);
    }, []);
    if(!result){
        return null;
    }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} />
        }}
        />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    image :  {
        height: 120, 
        width: 250
    }
})
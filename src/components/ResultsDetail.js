import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultsDetail = ({result}) => {
  return (
    <View styles={styles.container}>
        <Image styles={styles.image} source ={{uri: result.image_url, width : 250, height: 120}} />
      <Text styles={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginLeft : 15,
  },
    image : {
        width : 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name : {
        fontWeight : 'bold',
        fontSize: 16
    }
});
export default ResultsDetail;

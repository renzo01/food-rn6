import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
  return (
    <View style={styles.background}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize='none'
            autoCorrect = {false}
            style={styles.inputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    iconStyle: {
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal : 15
    },
    inputStyle:{
        flex: 1,
    },
    background:{
        backgroundColor : '#F0EEEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 5
    }
})
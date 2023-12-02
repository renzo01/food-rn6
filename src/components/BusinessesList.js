import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({title, businesses, navigation}) => {
    if(!businesses.length){
        return null;
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator = {false}
                horizontal = {true}
                data={businesses}
                keyExtractor={(business) => business.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id: item.id})}>
                            <ResultsDetail result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title : {
        fontSize:18,
        fontWeight: 'bold',
        marginLeft : 15,
        marginBottom : 5
    },
    container : {
        marginBottom : 10
    }
});

export default withNavigation(ResultList);
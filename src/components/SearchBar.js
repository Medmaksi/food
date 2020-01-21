import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={style.background}>
            <Feather name="search" style={style.iconStyle}/>
            <TextInput onEndEditing={() => {
                onTermSubmit();
            }} autoCapitalize='none' autoCorrect={false} style={style.inputStyle} value={term} onChangeText={newTerm => onTermChange(newTerm)} placeholder="Search Bar"/>
        </View>
    )
}

const style = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        height: 50,
        borderRadius:5,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize:35,
        marginHorizontal: 15,
        alignSelf:'center'
    }
})

export default SearchBar


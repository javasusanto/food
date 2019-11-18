import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from '../components/ResultList'



const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  const filterResultByPrice=(price)=>{
    // price === '$' || '$$' || '$$$'
    return results.filter(result=>{
      return result.price === price
    })
  }

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <ScrollView>
      <ResultList  results={filterResultByPrice('$')} title='Cost Effective'/>
        <ResultList  results={filterResultByPrice('$$')} title='Big Pricer' />
      <ResultList  results={filterResultByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});

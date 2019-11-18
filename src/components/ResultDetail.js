import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'



const ResultDetail =({result})=>{
    return (
    <View style={styles.container}>
        <Image 
        source={{uri:result.image_url}}
        style={styles.image}
        />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Starts {result.review_count} Reviews</Text>
    </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginHorizontal:15,

    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold', 
    }

})

export default ResultDetail
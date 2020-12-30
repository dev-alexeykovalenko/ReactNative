import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Image 
                style={styles.imageStyle} 
                source={{ uri: result.image_url }} 
            />
            <Text style={styles.titleStyle} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    titleStyle: {
        fontWeight: "bold",
        fontSize: 14
    }
});

export default ResultsDetail;
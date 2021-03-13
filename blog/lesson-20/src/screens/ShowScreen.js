import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as blogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(blogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
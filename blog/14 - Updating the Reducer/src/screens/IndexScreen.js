import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const { state: blogPosts, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item}) => {
                    return (
                        <View style={styles.rowStyle}>
                            <Text style={styles.titleStyle}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.iconStyle} name="trash" />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    }
});

export default IndexScreen;
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as blogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(blogContext);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button 
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }} 
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;
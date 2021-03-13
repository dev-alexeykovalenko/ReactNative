import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context as blogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(blogContext);

    return <BlogPostForm />;
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;
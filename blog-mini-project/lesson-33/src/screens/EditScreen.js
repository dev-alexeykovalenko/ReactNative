import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as blogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const { state: blogPosts, editBlogPost } = useContext(blogContext);

    const blogPost = blogPosts.find(
        (blogPost) => blogPost.id === id
    );

    return <BlogPostForm 
        initialValues={{ 
            title: blogPost.title, 
            content: blogPost.content 
        }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => {
                navigation.pop();
            })
        }}
    />;
};

const styles = StyleSheet.create({});

export default EditScreen;
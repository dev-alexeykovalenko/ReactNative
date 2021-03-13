import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        const newPost = {
            title: `Blog Post #${blogPosts.length + 1}`
        };

        setBlogPosts([
            ...blogPosts,
            newPost
        ]);
    };

    const editBlogPost = () => {};
    const deleteBlogPost = () => {};

    return (
        <BlogContext.Provider
            value={{
                data: blogPosts,
                addBlogPost,
                editBlogPost,
                deleteBlogPost
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
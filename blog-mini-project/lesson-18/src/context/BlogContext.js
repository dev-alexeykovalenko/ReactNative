import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}` 
                }
            ];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'add_blogpost', payload: id });
    };
};

const deleteBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'delete_blogpost' });
    };
}

export const { Context, Provider } = createDataContext({
    reducer: blogReducer, 
    actions: { addBlogPost, deleteBlogPost },
    initialState: []
});


const blogReducer = (state=[], action) => {
    switch(action.type){
        case 'INITIALIZE_BLOGS':
            return action.data
        case 'ADD_BLOG':
            return state.concat(action.data)
        case 'DELETE_BLOG':
            const id = action.id
            return state.filter(blog => blog.id !== id)
        case 'REPLACE_BLOG':
            return state.filter(blog => blog.id !== action.data.id).concat(action.data.blog)
        default:
            return state
    }
}

export const actOfInitializeBlogs = blogs => {
    return {
        type: 'INITIALIZE_BLOGS',
        data: blogs
    }
}

export const actOfAddBlog = blog => {
    return {
        type: 'ADD_BLOG',
        data: blog
    }
}

export const actOfReplaceBlog = (blog, id) => {
    return {
        type: 'REPLACE_BLOG',
        data: {
            blog, id
        }
    }
}

export const actOfDeleteBlog = id => {
    return {
        type: 'DELETE_BLOG',    
        id
    }
}

export default blogReducer
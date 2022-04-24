const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';


let initialState = {
        posts: [
            {id: 0, text: 'Oh! This is my first post!'},
            {id: 1, text: 'I want to become a Software Engineer'},
        ],
        newPostText: '',
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.text,
            }
        }

        case ADD_POST: {
            let newPost = {
                id:2,
                text: action.text
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }

        default:
            return state

    }
}

export let addPostActionCreator = (text)=>{
    return {
        type: ADD_POST,
    }
}

export let updatePostActionCreator = (text)=>{
    return {
        type: UPDATE_POST,
        text: text,
    }
}



export default profileReducer
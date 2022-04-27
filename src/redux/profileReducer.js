const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



let initialState = {
        posts: [
            {id: 0, text: 'Oh! This is my first post!'},
            {id: 1, text: 'I want to become a Software Engineer'},
        ],
        newPostText: '',
        profile: null,
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.payload,
            }
        }

        case ADD_POST: {
            let newPost = {
                id:state.posts.length,
                text: state.newPostText,
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload,
            }

        }

        default:
            return state

    }
}

export let addPost = ()=>{
    return {
        type: ADD_POST,
    }
}

export let updatePost = (text)=>{
    return {
        type: UPDATE_POST,
        payload: text,
    }
}

export let setUserProfile = (user)=> {
    return {
        type: SET_USER_PROFILE,
        payload: user,
    }
}



export default profileReducer
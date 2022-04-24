const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


const initialState = {
    users: [
        {id:1, name: 'Kate', status: 'I am the most kind girl in the World!', followed:true},
        {id:2, name: 'Masha', status: 'Hello how are you?', followed:false},
        {id:3, name: 'Jack', status: 'Frontend Dev is my future!', followed:true},
    ]
}

const usersReducer = (state=initialState, action)=> {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                        }
                    return u
                    })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                        }
                    return u
                    })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export const setUsersActionCreater = (users)=>{
    return {
        type: SET_USERS,
        users: users,
    }
}

export default usersReducer
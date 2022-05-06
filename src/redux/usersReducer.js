import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING";




const initialState = {
    users: [],
    totalCount: 0,
    pageSize:100,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state=initialState, action)=> {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.payload) {
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
                    if (u.id === action.payload) {
                        return {...u, followed: false}
                        }
                    return u
                    })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload
            }
        }

        case SET_TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }

        default:
            return state
    }
}

export let follow = (userId) => {
    return {
        type: FOLLOW,
        payload: userId,
    }
}

export let unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        payload: userId,
    }
}

export let setUsers = (users)=>{
    return {
        type: SET_USERS,
        payload: users,
    }
}

export let setCurrentPage = (page)=> {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    }
}

export let setTotalCount = (total)=>{
    return {
        type: SET_TOTAL_COUNT,
        payload: total,
    }
}

export let setToggleIsFetching = (isFetching)=> {
    return {
        type: SET_TOGGLE_FETCHING,
        payload: isFetching,
    }
}


export const getUsersThunkCreator = (currentPage,pageSize)=> {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize)
                .then(response => {
                    dispatch(setToggleIsFetching(false))
                    dispatch(setUsers(response.items))
                    dispatch(setTotalCount(response.totalCount))
                })
    }
}




export default usersReducer
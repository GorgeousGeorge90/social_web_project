import {authAPI} from "../api/api";

const SET_LOG_IN= 'SET_LOG_IN';
const SET_LOG_OUT = 'SET_LOG_OUT';


const initialState = {
    id:null,
    login:null,
    email:null,
    isAuth:false,
}

const authReducer = (state=initialState,action)=> {
    switch (action.type) {
        case SET_LOG_IN: {
            return {
                ...state,
                ...action.payload,
                isAuth:true,
            }
        }

        case SET_LOG_OUT: {
            return {
                ...state,
                ...action.payload,
                isAuth:false,
            }
        }

        default:
            return state
    }
}


export const getUserData = (id,login,email,isAuth)=>({ type:SET_LOG_IN,payload:{id,login,email,isAuth}})
export const setLogOut = ()=>({ type:SET_LOG_OUT})

export const setUserData = (id,login,email,isAuth) => (dispatch) => {
    authAPI.me()
        .then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(getUserData(id,login,email,true))
            }
        })

}

export const logIn = (email,password,rememberMe=true)=> (dispatch)=> {
    authAPI.login(email,password,rememberMe)
        .then(response=>{
            if( response.data.resultCode === 0 ) {
                dispatch(setUserData())
            }
        })
}

export const logOut = ()=>(dispatch)=>{
    authAPI.logout()
        .then(response=>{
            if (response.data.resultCode === 0 ) {
                dispatch(getUserData(null,null,null, false))
            }
        })
}



export default authReducer
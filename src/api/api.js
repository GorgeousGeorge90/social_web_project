import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const instance = axios.create({
    withCredentials:true,
    headers: {
       'API-KEY': '075dd4d6-d982-496c-89e9-4566eaf4496e',
    }
})

export const usersAPI = {
    getUsers:(currentPage=1,pageSize=10)=> {
        return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    changePage:(page, pageSize = 10)=>{
        return instance.get(baseUrl + `/users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow: (userId)=>{
        return instance.post(baseUrl + `/follow/${userId}`,{})
    },

    unfollow: (userId)=>{
        return instance.delete(baseUrl + `/follow/${userId}`)
    },

}

export const  authAPI = {
    me: ()=>{
        return instance.get(baseUrl +  '/auth/me')
    },

    getUser: (userId=22886)=> {
        return  instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    },

    login: (email,password,rememberMe)=>{
        return instance.post(baseUrl + '/auth/login', {email,password,rememberMe})
    },

    logout: ()=>{
        return instance.delete(baseUrl + '/auth/login')
    }

}








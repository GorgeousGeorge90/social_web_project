import Post from "./Post /Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profileReducer";




const Posts = ()=> {
    // const posts = [
    //     {id:0, text:'Oh! This is my first post!'},
    //     {id:1, text:'I want to become a Software Engineer'},
    // ]

    const posts = useSelector(state=>state.profilePage.posts)
    const dispatch = useDispatch();


    const newPost = (value)=>{
        dispatch(addPost(value.newPost))
    }

    // let addPost = ()=> {
    //     alert('Hello World!')
    // }


    return (
        <div>
                <ReduxPostForm onSubmit={newPost}/>
            {posts.map(post=> <Post text={post.text}/>)}
        </div>
    )
}


const PostsForm = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPost' placeholder='typing...' />
            <button>Push</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({form:'newPost'})(PostsForm)

export default Posts

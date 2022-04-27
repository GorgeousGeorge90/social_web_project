import styles from './Posts.module.css'
import Post from "./Post /Post";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePost} from "../../../redux/profileReducer";




const Posts = ()=> {
    // const posts = [
    //     {id:0, text:'Oh! This is my first post!'},
    //     {id:1, text:'I want to become a Software Engineer'},
    // ]

    const posts = useSelector(state=>state.profilePage.posts)
    const newPostText = useSelector(state=>state.profilePage.newPostText)
    const dispatch = useDispatch();

    let addNewPost = React.createRef();


    let changePost = ()=> {
        let text = addNewPost.current.value;
        dispatch(updatePost(text))
    }



    // let addPost = ()=> {
    //     alert('Hello World!')
    // }


    return (
        <div>
                <form className={styles.posted}>
                    <textarea  ref={addNewPost}  value={newPostText} onChange={changePost} placeholder='Typing...'/>
                    <button onClick={()=>dispatch(addPost())}>Push</button>
                </form>
            {posts.map(post=> <Post text={post.text}/>)}
        </div>
    )
}


export default Posts
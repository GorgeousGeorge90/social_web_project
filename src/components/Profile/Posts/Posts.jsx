import styles from './Posts.module.css'
import Post from "./Post /Post";
import React from "react";




const Posts = (props)=> {
    // const posts = [
    //     {id:0, text:'Oh! This is my first post!'},
    //     {id:1, text:'I want to become a Software Engineer'},
    // ]

    let addNewPost = React.createRef();


     let addCoolPost = ()=> {
         props.addPost()
    }

    let changePost = ()=> {
        let text = addNewPost.current.value;
        props.updatePost(text)
    }



    // let addPost = ()=> {
    //     alert('Hello World!')
    // }


    const posts = props.posts

    return (
        <div>
                <form className={styles.posted}>
                    <textarea  ref={addNewPost}  value={props.newPostText} onChange={changePost} placeholder='Typing...'/>
                    <button onClick={addCoolPost}>Push</button>
                </form>
            {posts.map(post=> <Post text={post.text}/>)}
        </div>
    )
}


export default Posts
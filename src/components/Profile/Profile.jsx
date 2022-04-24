import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts}
                   addPost={props.addPost}
                   updatePost={props.updatePost}
                   newPostText={props.newPostText}/>
        </div>
    )
}


export default Profile

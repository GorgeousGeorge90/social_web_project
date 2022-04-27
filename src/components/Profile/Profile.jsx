import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <Posts/>
        </div>
    )
}


export default Profile

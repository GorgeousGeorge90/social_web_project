import Profile from "./Profile";
import {addPost} from "../../redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state)=> {
     return {
         posts: state.profilePage.posts,
     }
}

const ProfileContainer = connect(mapStateToProps,{addPost})(Profile)


export default ProfileContainer

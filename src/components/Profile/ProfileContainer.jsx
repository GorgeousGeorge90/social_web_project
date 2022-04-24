import Profile from "./Profile";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";


// const ProfileContainer = (props)=> {
//
//
//     let addPost = (text)=> {
//         props.dispatch(addPostActionCreator(text))
//     }
//
//     return (
//         <div>
//             <Profile addPost={addPost} profilePage={props.profilePage}/>
//         </div>
//     )
// }

let mapStateToProps = (state)=> {
     return {
         posts: state.profilePage.posts,
         newPostText: state.profilePage.newPostText,
     }
}

let mapDispatchToProps = (dispatch)=>{
    return {

        addPost() {
            dispatch(addPostActionCreator())
        },

        updatePost(text) {
            dispatch(updatePostActionCreator(text))
        }

    }

}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)


export default ProfileContainer

import Profile from "./Profile";
import {useEffect} from "react";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";


const MyProfile = (props)=> {
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/22886')
            .then(response => {
                props.setUserProfile(response.data)
            })
    })
    return (
        <Profile profile={props.profile}/>
    )
}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile
})

const MyProfileContainer = connect(mapStateToProps,{setUserProfile})(MyProfile)
export default MyProfileContainer
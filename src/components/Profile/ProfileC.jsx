import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {authAPI} from "../../api/api";



const ProfileContainerSide = (props)=> {
    const {userId} = useParams();
    useEffect(()=>{
        authAPI.getUser(userId).then(response=>{
            props.setUserProfile(response.data)
        })
    },)

        return (
            <Profile profile={props.profile}/>
        )

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile
})

const ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileContainerSide)
export default ProfileContainer


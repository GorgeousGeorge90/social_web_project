import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(response=>{
            this.props.setUserProfile(response.data)
        })
    }

    render() {
debugger;
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile
})

const ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileContainerAPI)
export default ProfileContainer


import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreater, unfollowActionCreator} from "../../redux/usersReducer";




const mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        follow: (userId)=>{
            dispatch(followActionCreator(userId))
        },

        unfollow: (userId)=> {
            dispatch(unfollowActionCreator(userId))
        },

        setUsers: (users)=> {
            dispatch(setUsersActionCreater(users))
        }
    }
}


const usersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default usersContainer
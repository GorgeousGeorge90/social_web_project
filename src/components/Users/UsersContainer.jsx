import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setToggleIsFetching,
    setTotalCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./UsersC";
import Preloader from "../common /Preloader/Preloader";



class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }

        onChangePage = (pageNumber)=>{
            this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>: null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   onChangePage={this.onChangePage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}/>
            </>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}



const usersContainer = connect(mapStateToProps,{
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, setToggleIsFetching,getUsersThunkCreator}
)(UsersContainerAPI)

export default usersContainer
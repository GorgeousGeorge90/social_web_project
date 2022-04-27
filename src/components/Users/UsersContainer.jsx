import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./UsersC";
import Preloader from "../common /Preloader/Preloader";



class UsersContainerAPI extends React.Component {
    componentDidMount() {

            this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })

    }

    onChangePage = (page)=> {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setToggleIsFetching(false)
        })
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
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, setToggleIsFetching,}
)(UsersContainerAPI)

export default usersContainer
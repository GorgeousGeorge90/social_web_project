import {connect} from "react-redux";
import Header from "./Header";
import {getUserData} from "../../redux/authReducer";


const mapStateToProps = (state)=>{
    return {
        id: state.authPage.id,
        email:state.authPage.email,
        login:state.authPage.login,
        isAuth:state.authPage.isAuth,
    }
}

export const HeaderContainer = connect(mapStateToProps,{getUserData})(Header)
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";


// const DialogsContainer = (props)=> {
//
//
//     let addMessage = (message)=> {
//         let action = addMessageActionCreater(message)
//         props.dispatch(action)
//     }
//
//     return <Dialogs addMessage={addMessage} messages={props.dialogsPage.messages} />
//
// }


let mapStateToProps = (state)=> {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.authPage.isAuth,
    }
}


const DialogsContainer = connect(mapStateToProps,{addMessage})(Dialogs)


export default DialogsContainer
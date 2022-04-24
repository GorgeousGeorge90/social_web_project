import Dialogs from "./Dialogs";
import {addMessageActionCreater} from "../../redux/dialogsReducer";
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
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch)=> {
    return {
         addMessage(message) {
            let action = addMessageActionCreater(message)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer
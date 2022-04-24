import styles from './Dialogs.module.css'
import React from "react";

const dialogs = [
    { id:0, name:'Egor'},
    { id:1, name:'Kate'},
    { id:2, name:'Alex'},
    { id:3, name:'Sveta'},
    { id:4, name:'Masha'},
    { id:5, name:'Roman'},
]

// const messages = [
//     {id:0, text: 'Hi!'},
//     {id:1, text: 'I am trying to do my best!'},
//     {id:2, text: "Hello! It's rather warm!"},
//     {id:3, text: 'Hi! Yup!'},
//     {id:4, text: 'Sorry! I need to go!'},
//     {id:5, text: 'Are you fucking kidding?'},
// ]


const Dialogs = (props)=> {

    const newMessage = React.createRef()

    let addCoolMessage = ()=> {
        let message = newMessage.current.value;
        props.addMessage(message)
    }


    const messages = props.dialogsPage.messages

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <ul>
                    {dialogs.map(dialog => <li className={styles.personItem}>{dialog.name}</li>)}
                </ul>
            </div>
            <div className={styles.messages}>
                <ul>
                    {messages.map(message => <li className={styles.textItem}>{message.text}</li>)}
                </ul>
            </div>
            <div>
                <form>
                    <textarea ref={newMessage}/>
                    <button onClick={addCoolMessage}>Send</button>
                </form>
            </div>
        </div>
    )
}


export default Dialogs

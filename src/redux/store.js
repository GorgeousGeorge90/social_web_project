import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, text: 'Oh! This is my first post!'},
                {id: 1, text: 'I want to become a Software Engineer'},
            ],
            newPostText: '',

        },
        dialogsPage: {
            messages: [
                {id: 0, text: 'Hi!'},
                {id: 1, text: 'I am trying to do my best!'},
                {id: 2, text: "Hello! It's rather warm!"},
                {id: 3, text: 'Hi! Yup!'},
                {id: 4, text: 'Sorry! I need to go!'},
                {id: 5, text: 'Are you fucking kidding?'},
            ]
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    },
    _rerenderEntireTree() {
        console.log('Tree rerended!')
    },
    subscruber(observer) {
        this._rerenderEntireTree = observer
    },
}



// export let updatePost = (newPost)=>{
//     state.profilePage.newPostText = newPost
//     // rerenderEntireTree(state)
//

window.store = store

export default store





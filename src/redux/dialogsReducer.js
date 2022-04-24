const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    messages: [
        {id: 0, text: 'Hi!'},
        {id: 1, text: 'I am trying to do my best!'},
        {id: 2, text: "Hello! It's rather warm!"},
        {id: 3, text: 'Hi! Yup!'},
        {id: 4, text: 'Sorry! I need to go!'},
        {id: 5, text: 'Are you fucking kidding?'},
    ]
}

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {
                ...state,
                messages: [...state.messages, {id:6,text:action.body}]
            }
        }
        default:
            return state
    }
}

export let addMessageActionCreater = (message) => ({
    type: ADD_MESSAGE,
    body: message,
})


export default dialogsReducer

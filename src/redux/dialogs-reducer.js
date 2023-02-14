const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Ashley'},
        {id: 6, name: 'Steven'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Enjoy your life'},
        {id: 4, message: 'Well done'},
        {id: 5, message: 'It is my first post'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;
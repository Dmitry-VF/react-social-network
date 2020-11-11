const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { name: 'Dima', id: 1 },
        { name: 'Alina', id: 2 },
        { name: 'Ctulhu', id: 3 },
        { name: 'Yoba', id: 4 },
    ],
    messagesData: [
        { message: 'Hi', id: 1 },
        { message: 'Hey Hei', id: 2 },
        { message: 'Ctulhu fhtagn', id: 3 },
        { message: 'Pshh pshh nichego ne slishno', id: 4 },

    ],
    newMessageText: ''
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        default:
            return state;
    }
    return state;

};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;
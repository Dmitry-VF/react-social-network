
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
    newMessageText: '',
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageTextBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: newMessage }],

            };
        default:
            return state;
    }
    return state;

};

export const sendMessageActionCreator = (newMessageTextBody) => ({type: SEND_MESSAGE, newMessageTextBody});

export default dialogsReducer;
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 23 },
                { id: 2, message: 'My first post', likesCount: 12 },
                { id: 3, message: 'Yeeah', likesCount: 56 },
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {
            friendsData: [
                { name: 'Dima', id: 1 },
                { name: 'Alina', id: 2 },
                { name: 'Ctulhu', id: 3 },
                { name: 'Yoba', id: 4 },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state) ;

    }
};

window.state = store;
export default store;

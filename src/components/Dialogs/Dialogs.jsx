import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {updateNewMessageTextCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messagesData
        .map(msg => <Message message={msg.message} key={msg.id} addMessage={props.addMessage} />);

    let addMessage = () => {
        props.sendMessage();
    };

    let newMessageTextBody = state.newMessageText;

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsData}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                   onChange={onMessageChange}
                                   value={newMessageTextBody} />
                    </div>
                    <div>
                        <button type='button' onClick={addMessage}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Dialogs;
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messagesData
        .map(msg => <Message message={msg.message} key={msg.id} addMessage={props.addMessage}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageTextBody)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsData}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
};

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageTextBody'
                       validate={[required, maxLength100]} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessage' }) (AddMessageForm)

export default Dialogs;
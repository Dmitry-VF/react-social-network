import React from "react";
import s from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import styles from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div className={styles.profileDataForm}>
            <form onSubmit={handleSubmit}>

                <div>
                    <b>Name</b>: {createField('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <b>Looking for a job</b>:
                    {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>

                <div><b>My professional skills</b>:
                    {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>

                <div>
                    <b>About me</b>:
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div className={s.contacts}>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key} :</b> {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    )
                })}
                </div>
                <div>
                    <button onClick={() => {
                    }}>Save
                    </button>
                    {error &&
                    <div className={styles.formSummaryError}>
                        {error}
                    </div>
                    }
                </div>
            </form>
        </div>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm
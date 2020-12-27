import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/default-user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, profileStatus, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);


    if (profile === null || profile === undefined) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })


    }

    return (
        <div className={s.profileInfo}>
            <div className={s.wrapper__avatar}>
                <div className={s.avatar}>
                    <img src={profile.photos.large || userPhoto} alt='avatar'/>
                    {isOwner && <label className={s.fileUpload}>
                        <input type={'file'} onChange={onMainPhotoSelected}/> <b>🔍</b>
                    </label>}
                </div>
            </div>

            <div className={s.wrapper__status_about}>
                <div className={s.status}><b>Status {isOwner && '(Double-click to change)'}</b>:
                    <ProfileStatusWithHooks status={profileStatus} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   toEditMode={() => {
                                       setEditMode(true)
                                   }}/>}
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return (
        <div className={s.about}>
            <div><b>Name:</b> {profile.fullName}</div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}

            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div className={s.contacts}>
                <span className={s.contactsHeader}>Contacts:</span> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
                {isOwner && <div className={s.about__button}>
                    <button onClick={toEditMode}>Edit</button> </div>}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactTitleWrapper}>
            <span className={s.contactTitle}>{contactTitle}:</span> <a href={contactValue}  target="_blank">{contactValue}</a>
        </div>
    )
}

export default ProfileInfo;
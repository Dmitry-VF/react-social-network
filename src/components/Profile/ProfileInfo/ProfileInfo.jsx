import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import nopic from "../../../assets/images/defaultUserpic.jpg";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (props.profile === null || props.profile === undefined) {
        return <Preloader/>
    }
/*
    let userpic = {
        if ( photos.large === null || props.profile.photos.large === undefined) {
            return {nopic}
    }
        else (return rops.profile.photos.large)
    }*/


    return (

        <div>

            <div className={s.avatar}>
                <img src={props.profile.photos.large} alt='avatar'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div className={s.about}>
                <div>
                    <div>{props.profile.fullName}</div>
                    <div>Looking for a job{props.profile.lookingForAJob}</div>

                    <div>{props.profile.lookingForAJobDescription}</div>
                    <div className={s.contacts}>
                        <div>
                            Web Site: <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a>
                        </div>
                        <div>
                            Instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                        </div>
                        <div>
                            Github: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a>
                        </div>
                        <div>
                            VK: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
                        </div>
                        <div>
                            Facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
                        </div>
                        <div>
                            Twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
                        </div><div>
                            Youtube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
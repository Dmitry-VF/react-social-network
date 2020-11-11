import React from 'react';
import s from './ProfileCover.module.css';

const ProfileCover = (props) => {
    return (
        <div className={s.cover}>
            <img src='https://pbs.twimg.com/profile_banners/953771642/1353166132/1500x500' alt='cover' />
        </div>
    )
}

export default ProfileCover;
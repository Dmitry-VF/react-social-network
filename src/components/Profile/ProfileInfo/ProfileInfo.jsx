import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src='https://sun9-27.userapi.com/c305515/v305515362/228b/AVnJrqFo7uQ.jpg' alt='avatar' />
            </div>
            <div className={s.about}>
                <div>
                    <div>Dmitry F.</div>
                    <div>Date of birth: 19 june</div>
                    <div>City: Volgograd</div>
                    <div>Education: VEC'13</div>
                    <div>Web Site: https://alloyoba.com</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
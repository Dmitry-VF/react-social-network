import React, { useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.setStatus)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
       status && props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div className={s.statusText}>
                <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
            </div>
            }
            {props.isOwner && editMode &&
            <div className={s.editMode__input}>
                enter your status below and click nearby to save
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
}
;

export default ProfileStatusWithHooks;
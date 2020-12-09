import React, {createRef, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        useEffect(() => {
            setStatus(props.setStatus)
        },[props.status])

        const activateEditMode = () => {
            setEditMode(true);
        }

        const deactivateEditMode = () => {
            setEditMode(false);
            debugger;
            props.updateStatus(status);
        }

        const onStatusChange = (e) => {
            setStatus( e.currentTarget.value);
        }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}></input>
                </div>
                }
            </div>
        )
    }
;

export default ProfileStatusWithHooks;
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default-user.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.userWrapper}>
            <div>
                <div className={styles.userPic}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                 <div className={styles.name__status__wrapper}>
                     <span>{user.name}</span>
                     {user.status &&  <span><b>status:</b> {user.status} </span>}
                 </div>
                <div className={styles.subscribeBtn}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>}
                </div>
            </div>

        </div>)
}


export default User;
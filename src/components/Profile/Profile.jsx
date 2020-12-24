import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}
                   profileStatus={props.status}
                   saveProfile={props.saveProfile}
                   updateStatus={props.updateStatus}
                   savePhoto={props.savePhoto}
                   isOwner={props.isOwner} />
      <MyPostsContainer isOwner={props.isOwner} />
    </div>
  );
};
export default Profile;
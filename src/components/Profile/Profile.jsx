import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileCover from './ProfileCover/ProfileCover';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileCover />
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
  );
};
export default Profile;
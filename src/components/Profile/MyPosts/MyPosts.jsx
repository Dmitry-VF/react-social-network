import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let PostsElements =
      props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let NewPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea placeholder='Enter your text' ref={NewPostElement} onChange={onPostChange} value={props.newPostText} />
        <button type='button' onClick={onAddPost}>Add post</button>
      </div>
      {PostsElements}
    </div>
  );
};
export default MyPosts;
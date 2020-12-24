import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.item}>
                <img
                    src='https://static.vecteezy.com/system/resources/thumbnails/000/425/647/small/Multimedia__28203_29.jpg'
                    alt='avatar'/>
                <span className={s.postMessage}>
          {props.message}
          </span>

            </div>
            <div    className={s.likesCount}>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
};
export default Post;
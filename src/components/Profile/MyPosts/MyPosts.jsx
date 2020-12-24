import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = props => {
    let PostsElements =
        props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let onAddNewPost = (values) => {
        props.addPost(values.newPostTextBody)
    }

    return (
        <div className={s.postsBlock}>
            <b>My posts</b>
            {props.isOwner &&
            <AddPostReduxForm onSubmit={onAddNewPost}/>}
            <div className={s.postsElements}>
            {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;

const maxLength300 = maxLengthCreator(300)

const AddPostForm = (props) => {
    return (
        <div className={s.addPostForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name='newPostTextBody' placeholder='Enter your text'
                           validate={[required, maxLength300]}/>
                </div>
                <div>
                    <button>Add a post</button>
                </div>
            </form>
        </div>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = props => {
    let PostsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let onAddNewPost = (values) => {
        props.addPost(values.newPostTextBody)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <AddPostReduxForm onSubmit={onAddNewPost}/>
            {PostsElements}
        </div>
    );
}

export default MyPosts;

const maxLength300 = maxLengthCreator(300)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  name='newPostTextBody' placeholder='Enter your text'
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add a post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)
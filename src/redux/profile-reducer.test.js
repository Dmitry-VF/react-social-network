import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "./redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'My first post', likesCount: 12},
        {id: 3, message: 'Yeeah', likesCount: 56},
    ]
}

it('length of posts should be incremented', () => {
    //1 initial data
    let action = addPostActionCreator('allo eto ti?');
    //2 action
    let newState = profileReducer(state, action);
    //3 expectation
    expect( newState.posts[3].message).toBe('allo eto ti?');
})

it('new post message should be correct', () => {
    //1 initial data
    let action = addPostActionCreator('allo eto ti?');
    //2 action
    let newState = profileReducer(state, action);
    //3 expectation
    expect( newState.posts[3].message).toBe('allo eto ti?');
})

it('after deleting length of messages should be decremented', () => {
    //1 initial data
    let action = deletePost(1);
    //2 action
    let newState = profileReducer(state, action);
    //3 expectation
    expect( newState.posts.length).toBe(2);
})
it(`after deleting length shouldn't be changed if id is incorrect` , () => {
    //1 initial data
    let action = deletePost(1000);
    //2 action
    let newState = profileReducer(state, action);
    //3 expectation
    expect( newState.posts.length).toBe(3);
})
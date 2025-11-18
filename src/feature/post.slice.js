import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    /*setPost: (state, { payload }) => {
      state.post = payload;
    },

    addPosts: (state, { payload }) => {
      state.post.push(payload);
    },*/

    /*setApiPostAA: (state, { payload }) => {
      state.posts = payload;
    }*/

    setApiPostAA: (state, action) => {
      state.posts = action.payload;
    }
  },
});

export const { /* setPosts, addPosts */ setApiPostAA } = postSlice.actions;
export default postSlice.reducer;
// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: "/business-headshot",
      title: "Business Headshot",
      description: "A deep dive into the techniques that make stunning photography.",
      content: "Explore in-depth techniques for creating stunning photographs...",
      image: "./image1.png",
      likes: 0,
      dislikes: 0
    },
    {
      id: "/dramatic-shot",
      title: "Dramatic Shot",
      description: "How to freeze dramatic moments in time through photography.",
      content: "Learn how to freeze dramatic moments in photography...",
      image: "./image2.png",
      likes: 0,
      dislikes: 0
    },
    {
      id: "/passion-image",
      title: "Passion Image",
      description: "How to freeze dramatic moments in time through photography.",
      content: "Learn how to freeze dramatic moments in photography...",
      image: "./image3.png",
      likes: 0,
      dislikes: 0
    }
  ]
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    incrementLike: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    decrementLike: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post && post.likes > 0) {
        post.likes -= 1;
      }
    },
    incrementDislike: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.dislikes += 1;
      }
    },
    decrementDislike: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post && post.dislikes > 0) {
        post.dislikes -= 1;
      }
    }
  }
});

export const { incrementLike, decrementLike, incrementDislike, decrementDislike } = postSlice.actions;
export default postSlice.reducer;
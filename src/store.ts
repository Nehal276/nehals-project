import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  likes: number;
  claps: number;
}

const initialPosts: Post[] = [
  {
    id: "/business-headshot",
    title: "Business Headshot",
    description: "A deep dive into the techniques that make stunning photography.",
    content: "Explore in-depth techniques for creating stunning photographs...",
    image: "./image1.png",
    likes: 0,
    claps: 0
  },
  {
    id: "/dramatic-shot",
    title: "Dramatic Shot",
    description: "How to freeze dramatic moments in time through photography.",
    content: "Learn how to freeze dramatic moments in photography...",
    image: "./image2.png",
    likes: 0,
    claps: 0
  },
  {
    id: "/passion-image",
    title: "Passion Image",
    description: "How to freeze dramatic moments in time through photography.",
    content: "Learn how to freeze dramatic moments in photography...",
    image: "./image3.png",
    likes: 0,
    claps: 0
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPosts,
  reducers: {
    likePost: (state, action: PayloadAction<string>) => {
      const post = state.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    clapPost: (state, action: PayloadAction<string>) => {
      const post = state.find(post => post.id === action.payload);
      if (post) {
        post.claps += 1;
      }
    }
  }
});

export const { likePost, clapPost } = postsSlice.actions;

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
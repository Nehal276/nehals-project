import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BlogState {
  [key: string]: {
    likes: number;
    dislikes: number;
  };
}


const initialState: BlogState = {
  'photography-1': {
    likes: 0,
    dislikes: 0
  },
  'photography-2': {
    likes: 0,
    dislikes: 0
  },
  'photography-3': {
    likes: 0,
    dislikes: 0
  }
};


const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    likeBlog: (state, action: PayloadAction<string>) => {
      const blog = state[action.payload];
      blog.likes += 1;
    },
    dislikeBlog: (state, action: PayloadAction<string>) => {
      const blog = state[action.payload];
      blog.dislikes += 1;
    },
    unlikeBlog: (state, action: PayloadAction<string>) => {
      const blog = state[action.payload];
      if (blog.likes > 0) {
        blog.likes -= 1;
      }
    },
    undislikeBlog: (state, action: PayloadAction<string>) => {
      const blog = state[action.payload];
      if (blog.dislikes > 0) {
        blog.dislikes -= 1;
      }
    }
  }
});

export const { 
  likeBlog, 
  dislikeBlog, 
  unlikeBlog, 
  undislikeBlog 
} = blogSlice.actions;

export default blogSlice.reducer;

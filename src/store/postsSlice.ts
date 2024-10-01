import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";
import { fetchPost, fetchPosts } from "@/api/postApi";

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetchPosts() as Promise<Post[]>;
});

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (postId: number) => {
    return fetchPost(postId) as Promise<Post>;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostFavorite: (
      state,
      action: PayloadAction<{ id: number; isFav: boolean }>
    ) => {
      const { id, isFav } = action.payload;
      const post = state.posts.find((p) => p.id === id);
      if (post) {
        post.isFav = isFav;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.status = "succeeded";
          if (!state.posts.map((post) => post.id).includes(action.payload.id)) {
            state.posts.push(action.payload);
          }
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export const { setPostFavorite } = postsSlice.actions;
export default postsSlice.reducer;

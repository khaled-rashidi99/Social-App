import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../types";
import { fetchComments } from "@/api/postApi";

interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  status: "idle",
  error: null,
};

export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (postId: number) => {
    return fetchComments(postId) as Promise<Comment[]>;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByPostId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCommentsByPostId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.status = "succeeded";
          state.comments = action.payload;
        }
      )
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;

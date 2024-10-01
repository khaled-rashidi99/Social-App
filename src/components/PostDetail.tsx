import React, { useEffect } from "react";
import CommentList from "./CommentList";
import PostCard from "./PostCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPostById } from "../store/postsSlice";
import { fetchCommentsByPostId, clearComments } from "../store/commentsSlice";

interface PostDetailProps {
  postId: number;
}

const PostDetail: React.FC<PostDetailProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const postStatus = useAppSelector((state) => state.posts.status);
  const postError = useAppSelector((state) => state.posts.error);

  const comments = useAppSelector((state) => state.comments.comments);
  const commentStatus = useAppSelector((state) => state.comments.status);
  const commentError = useAppSelector((state) => state.comments.error);

  useEffect(() => {
    dispatch(fetchPostById(postId));
    dispatch(fetchCommentsByPostId(postId));

    return () => {
      dispatch(clearComments());
    };
  }, [dispatch, postId]);

  if (postStatus === "loading" || commentStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (postStatus === "failed") {
    return <div>Error loading post: {postError}</div>;
  }

  if (commentStatus === "failed") {
    return <div>Error loading comments: {commentError}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Post</h1>
      {post && <PostCard post={post} showCommentBtn={false} />}
      <h2 className="text-2xl font-semibold my-4">Comments</h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default React.memo(PostDetail);

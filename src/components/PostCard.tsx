import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch } from "../store/hooks";
import { setPostFavorite } from "../store/postsSlice";

interface PostCardProps {
  post: Post;
  showCommentBtn: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, showCommentBtn }) => {
  const dispatch = useAppDispatch();

  const handleFavoriteToggle = () => {
    dispatch(setPostFavorite({ id: post.id, isFav: !post.isFav }));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize text-[#134b70]">
          {post.title}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavoriteToggle}
          className={post.isFav ? "text-red-500" : "text-gray-400"}
        >
          <FaHeart size={20} />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{post.body}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <div hidden={!showCommentBtn}>
          <Button asChild className="bg-[#508C9B] hover:bg-slate-500">
            <Link to={`/posts/${post.id}`}>View Comments</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default React.memo(PostCard);

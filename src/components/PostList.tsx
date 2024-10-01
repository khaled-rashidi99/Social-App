import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PostCard from "./PostCard";
import { Post } from "../types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPosts } from "../store/postsSlice";

const POSTS_PER_PAGE = 20;

interface PostListProps {
  favOnly?: boolean;
}

const PostList: React.FC<PostListProps> = ({ favOnly = false }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || "1");

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch, status]);

  const filteredPosts = useMemo(() => {
    return favOnly ? posts.filter((post) => post.isFav) : posts;
  }, [posts, favOnly]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center items-center text-xl text-[#134b70]">
        Loading posts...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="w-full flex justify-center items-center text-xl text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <ScrollArea className={paginatedPosts.length > 0 ? "h-[75dvh]" : "h-fit"}>
        <div className="space-y-6 mb-6">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post: Post) => (
              <PostCard key={post.id} post={post} showCommentBtn={true} />
            ))
          ) : (
            <p className="text-gray-700">No posts available.</p>
          )}
        </div>
      </ScrollArea>
      <Pagination className="mt-4">
        <PaginationContent>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem
              key={page}
              className="bg-[#508C9B] rounded hover:bg-slate-500"
            >
              <PaginationLink
                role="button"
                onClick={() => handlePageChange(page)}
                className="rounded hover:bg-slate-500"
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default React.memo(PostList);

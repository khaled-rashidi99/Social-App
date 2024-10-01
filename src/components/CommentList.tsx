import React, { useMemo } from "react";
import CommentCard from "./CommentCard";
import { Comment } from "../types";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const memoizedComments = useMemo(() => comments, [comments]);

  return (
    <div className="space-y-4">
      {memoizedComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default React.memo(CommentList);

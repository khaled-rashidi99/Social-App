import React from "react";
import { Comment } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback>{comment.email[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-sm font-medium capitalize">
            {comment.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{comment.email}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm">{comment.body}</p>
    </CardContent>
  </Card>
);

export default React.memo(CommentCard);

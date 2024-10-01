import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
const PostDetail = lazy(() => import("../components/PostDetail"));

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Suspense
    fallback={
      <div className="w-full flex justify-center items-center text-xl text-[#134b70]">
        Loading...
      </div>
    }
  >
    {children}
  </Suspense>
);

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  return (
    <div className="container mx-auto p-4">
      {postId && (
        <SuspenseWrapper>
          <PostDetail postId={Number(postId)} />
        </SuspenseWrapper>
      )}
    </div>
  );
};

export default PostPage;

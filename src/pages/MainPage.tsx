import React, { Suspense, lazy } from "react";
const PostList = lazy(() => import("../components/PostList"));

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

const MainPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <SuspenseWrapper>
      <PostList />
    </SuspenseWrapper>
  </div>
);

export default MainPage;

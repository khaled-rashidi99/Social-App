import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <ProfilePage />
      </Layout>
    ),
  },
  {
    path: "/posts/:postId",
    element: (
      <Layout>
        <PostPage />,
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />,
      </Layout>
    ),
  },
]);

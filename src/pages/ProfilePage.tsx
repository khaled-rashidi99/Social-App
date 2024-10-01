import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PostList from "@/components/PostList";

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#134b70]">
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Welcome to your profile page. Here you can view your favorite posts.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-[#134b70]">
            Favorite Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PostList favOnly={true} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;

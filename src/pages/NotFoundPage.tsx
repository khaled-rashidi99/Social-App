import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[87dvh] bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0f172a] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-[#0f172a] mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-[#0f172a] mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[#134b70]"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

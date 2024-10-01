const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<any[]> => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};

export const fetchComments = async (postId: number): Promise<any[]> => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  return response.json();
};

export const fetchPost = async (postId: number): Promise<any> => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`);
  return response.json();
};

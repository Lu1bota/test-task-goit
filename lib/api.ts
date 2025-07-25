import { Post } from "@/types/posts";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await axios.get<Post[]>("/posts");
  return res.data;
}

export async function getPostsById(id: number) {
  const res = await axios.get<Post>(`/posts/${id}`);
  return res.data;
}

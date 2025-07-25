import { Post } from "@/types/posts";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  try {
    const res = await axios.get<Post[]>("/posts");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostsById(id: number) {
  try {
    const res = await axios.get<Post>(`/posts/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

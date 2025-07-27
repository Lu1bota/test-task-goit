import { getPosts, getPostsById } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: post.id.toString(),
  }));
}

interface PostDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id } = await params;
  const post = await getPostsById(+id);

  return <PostDetailsClient data={post} />;
}

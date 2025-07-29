import { getPosts, getPostsById } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: post.id.toString(),
  }));
}

interface PostDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PostDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostsById(+id);

  return {
    metadataBase: new URL(
      `https://test-task-goit-cyan.vercel.app/posts/${post.id}`
    ),
    title: `Пост: ${post.id}`,
    description: post.body.slice(0, 30),
    openGraph: {
      title: `Пост: ${post.id}`,
      description: post.body.slice(0, 30),
      url: `https://test-task-goit-cyan.vercel.app/posts/${post.id}`,
      images: [
        {
          url: "/SEO_OpenGraph_Miniblog.jpg",
          width: 1200,
          height: 630,
          alt: "mini blog preview",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Пост: ${post.id}`,
      description: post.body.slice(0, 30),
      images: [],
    },
  };
}

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id } = await params;
  const post = await getPostsById(+id);

  return <PostDetailsClient data={post} />;
}

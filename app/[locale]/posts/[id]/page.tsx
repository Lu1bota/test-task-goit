import { getPosts, getPostsById } from "@/lib/api";
import PostDetailsClient from "./PostDetails.client";
import { Metadata } from "next";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: post.id.toString(),
  }));
}

interface PostDetailsProps {
  params: Promise<{ id: string; locale: string }>;
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

const i18nNamespaces = ["postDetails"];

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id, locale } = await params;
  const postId = +id;
  // const post = await getPostsById(+id);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostsById(postId),
  });

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostDetailsClient />;
      </HydrationBoundary>
    </TranslationsProvider>
  );
}

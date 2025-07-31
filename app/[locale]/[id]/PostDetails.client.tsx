"use client";

import { useParams, useRouter } from "next/navigation";
import css from "./PostDetailsClient.module.css";
import Container from "@/components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import { getPostsById } from "@/lib/api";
import Loader from "../loading";

export default function PostDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const postId = +id;
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostsById(postId),
    refetchOnMount: false,
  });

  const router = useRouter();

  function handleRouter() {
    router.push("/");
  }

  return (
    <>
      {isLoading && <Loader />}

      <Container>
        <div className={css.postContainer}>
          {post && (
            <>
              <h3 className={css.postTitle}>{post.title}</h3>
              <p className={css.postBody}>{post.body}</p>

              <button onClick={handleRouter} className={css.postButton}>
                На головну
              </button>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

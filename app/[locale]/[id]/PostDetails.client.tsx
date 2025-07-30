"use client";

import { useRouter } from "next/navigation";
import css from "./PostDetailsClient.module.css";
import { Post } from "@/types/posts";
import Container from "@/components/Container/Container";

interface PostDetailsClientProps {
  data: Post;
}

export default function PostDetailsClient({ data }: PostDetailsClientProps) {
  const router = useRouter();

  function handleRouter() {
    router.push("/");
  }

  return (
    <Container>
      <div className={css.postContainer}>
        <h3 className={css.postTitle}>{data.title}</h3>
        <p className={css.postBody}>{data.body}</p>

        <button onClick={handleRouter} className={css.postButton}>
          На головну
        </button>
      </div>
    </Container>
  );
}

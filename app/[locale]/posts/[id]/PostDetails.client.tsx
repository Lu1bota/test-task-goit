"use client";

import { Post } from "@/types/posts";
import { useRouter } from "next/navigation";
import css from "./PostDetailsClient.module.css";
import Container from "@/components/Container/Container";
import { useTranslation } from "react-i18next";

interface PostDetailsClientProps {
  data: Post;
}

export default function PostDetailsClient({ data }: PostDetailsClientProps) {
  const router = useRouter();
  const { t } = useTranslation();

  function handleRouter() {
    router.push("/");
  }

  return (
    <Container>
      <div className={css.postContainer}>
        <h3 className={css.postTitle}>{data.title}</h3>
        <p className={css.postBody}>{data.body}</p>

        <button onClick={handleRouter} className={css.postButton}>
          {t("buttonBack")}
        </button>
      </div>
    </Container>
  );
}

import { Post } from "@/types/posts";
import Link from "next/link";
import css from "./PostsList.module.css";
import { useTranslation } from "react-i18next";

interface PostsListProps {
  data: Post[];
}

export default function PostsList({ data }: PostsListProps) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className={css.mainTitle}>{t("header")}</h2>

      <ul className={css.postsList}>
        {data.map((post) => (
          <li key={post.id} className={css.postItem}>
            <h3 className={css.postTitle}>{post.title}</h3>
            <Link href={`/posts/${post.id}`} className={css.postButton}>
              {t("buttonText")}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

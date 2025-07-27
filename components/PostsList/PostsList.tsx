import { Post } from "@/types/posts";
import Link from "next/link";
import css from "./PostsList.module.css";

interface PostsListProps {
  data: Post[];
}

export default function PostsList({ data }: PostsListProps) {
  return (
    <>
      <h1 className={css.mainTitle}>Пости</h1>

      <ul className={css.postsList}>
        {data.map((post) => (
          <li key={post.id} className={css.postItem}>
            <h3 className={css.postTitle}>{post.title}</h3>
            <Link href={`/posts/${post.id}`} className={css.postButton}>
              Post Details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import Container from "@/components/Container/Container";
import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <Container>
      <h1>Пости</h1>

      <PostsList data={posts} />
    </Container>
  );
}

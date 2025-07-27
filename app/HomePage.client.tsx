"use client";

import Container from "@/components/Container/Container";
import Pagination from "@/components/Pagination/Pagination";
import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";
import { Post } from "@/types/posts";
import { useEffect, useState } from "react";

export default function HomePageClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchPosts() {
      const res = await getPosts();

      setTotalPages(Math.ceil(res.length / itemsPerPage));
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setPosts(res.slice(start, end));
    }
    fetchPosts();
  }, [currentPage]);

  return (
    <Container>
      <PostsList data={posts} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </Container>
  );
}

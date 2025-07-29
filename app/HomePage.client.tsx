"use client";

import Container from "@/components/Container/Container";
import Pagination from "@/components/Pagination/Pagination";
import PostsList from "@/components/PostsList/PostsList";
import { getPosts } from "@/lib/api";
import { Post } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "./loading";

export default function HomePageClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const itemsPerPage = 5;

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / itemsPerPage));
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setPosts(data.slice(start, end));
    }
  }, [data, currentPage]);

  return (
    <Container>
      {isLoading && <Loader />}

      {isSuccess && (
        <>
          {data && <PostsList data={posts} />}

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setPage={setCurrentPage}
            />
          )}
        </>
      )}
    </Container>
  );
}

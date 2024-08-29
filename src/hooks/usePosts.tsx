import { FC, useMemo } from "react";
import { SortOption } from "../components/PostFilter";
import { Post } from "../components/PostItem";
export interface useSortedPostsProps {
  posts: Post[];
  sort: SortOption;
}

export interface usePostsProps {
  sortedPost: useSortedPostsProps;
  query: string;
}

export const useSortedPosts = ({ posts, sort }: useSortedPostsProps) => {
  const sortedPosts = useMemo(() => {
    if (sort !== "") {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = ({ sortedPost, query }: usePostsProps) => {
  const { posts, sort } = sortedPost;
  const sortedPosts = useSortedPosts({ posts, sort });
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};

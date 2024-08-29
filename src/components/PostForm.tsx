import React, { useState } from "react";
import { Post } from "./PostItem";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export interface PostFormProps {
  create(post: Post): void;
}

const PostForm = ({ create }: PostFormProps) => {
  const [post, setPost] = useState<Post>({ title: "", body: "" });

  const addNewPost = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form action="">
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Назва поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Опис поста"
      />
      <MyButton onClick={addNewPost}>Створити пост</MyButton>
    </form>
  );
};

export default PostForm;

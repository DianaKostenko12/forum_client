import React, { FC } from "react";
import { isPropertySignature } from "typescript";
import MyButton from "./UI/button/MyButton";

export interface Post {
  id?: number;
  title: string;
  body: string;
}

export interface PostItemProps {
  number: number;
  post: Post;
  remove(post: Post): void;
}

const PostItem: FC<PostItemProps> = ({ number, post, remove }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Видалити</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

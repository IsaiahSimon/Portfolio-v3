import React from "react";
import type { FunctionComponent } from "react";

interface BlogPostProps {
  id: number;
  title: string;
  content: string;
  date: string;
  // other fields...
}

const BlogPost: FunctionComponent<BlogPostProps> = ({
  title,
  content,
  date,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;

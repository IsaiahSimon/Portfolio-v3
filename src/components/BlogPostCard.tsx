import React from "react";

interface BlogPostCardProps {
  title: string;
  summary: string;
  link: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  summary,
  link,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <a href={link}>Read More</a>
    </div>
  );
};

export default BlogPostCard;

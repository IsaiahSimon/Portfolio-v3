import React from "react";
import Layout from "../components/Layout";

const BlogPage = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <p>
        This page will show a list will list out my blog posts, possibly fetched
        from a database or a static file.
      </p>
    </Layout>
  );
};

export default BlogPage;

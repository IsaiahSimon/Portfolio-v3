import { type NextPage } from "next";
import Layout from "~/components/Layout";
import BlogPostCard from "~/components/BlogPost";
import { blogPosts } from "../config";

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog - Isaiah Simon">
      <section>
        <h1>Blog</h1>
        <h3 className="mt-5 ">
          Here you can find my latest posts on development, tech, and more.
        </h3>
      </section>

      <section>
        {/* Map over your blog posts and render a BlogPostCard for each one */}
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))}
      </section>
    </Layout>
  );
};

export default BlogPage;

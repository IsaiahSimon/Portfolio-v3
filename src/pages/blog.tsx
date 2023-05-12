import { type NextPage } from "next";
import Layout from "~/components/Layout";
import { blogPosts } from "../config";
import Spacer from "~/components/Spacer";
import Button from "~/components/Button";

const BlogPage: NextPage = () => {
  return (
    <Layout title="Blog - Isaiah Simon">
      <div className="flex items-center justify-between ">
        <h1 className="mb-6  sm:mb-0">Blog</h1>
        <div>
          <Button href="/projects" label="Projects" variant="primary" />
        </div>
      </div>
      <h3 className="mt-5 italic text-yellow-300">
        (Please excuse the appearance. This page is still a work-in-progress)
      </h3>
      <h3 className="mt-5 ">
        Here you can find my latest posts on development, tech, and more.
      </h3>
      <Spacer height="40px" />
      <ul>
        {/* Map over your blog posts and render a BlogCard for each one */}
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3 className="text-slateLight">{post.title}</h3>
            <span>{post.date}</span>
            <Spacer height="15px" />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

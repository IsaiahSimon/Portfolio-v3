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
          <Button href="/projects" label="Projects" variant="secondary" />
        </div>
      </div>
      <h3 className="mt-5 ">
        Here you can find my latest posts on development, tech, and more.
      </h3>
      <Spacer height="40px" />
      <ul>
        {/* Map over your blog posts and render a BlogPostCard for each one */}
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3 className="text-slateLight">{post.title}</h3>
            <span>{post.date}</span>
            <Spacer height="15px" />
          </li>
        ))}
      </ul>
      <Spacer height="35px" />
      <div className="flex justify-end">
        <Button
          label="Say Hello"
          href="mailto:isimon.dev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        />
      </div>
    </Layout>
  );
};

export default BlogPage;

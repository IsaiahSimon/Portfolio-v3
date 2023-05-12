import React from "react";
import Layout from "../components/Layout";
import FeaturedProject from "~/components/FeaturedProject";
import Spacer from "~/components/Spacer";
import Button from "~/components/Button";

import { projects } from "~/config";

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between ">
        <h1 className="mb-6  sm:mb-0">Projects</h1>
        <div>
          <Button href="/blog" label="Blog" variant="primary" />
        </div>
      </div>
      <h3 className="mt-5 ">
        Here you can find my latest posts on development, tech, and more.
      </h3>
      <Spacer height="40px" />
      <ul className="flex flex-col gap-10">
        {/* Map over your projects and render a Project for each one */}
        {projects.map((project) => (
          <li className="border-8 border-blue-500" key={project.id}>
            <FeaturedProject
              id={project.id}
              title={project.title}
              description={project.description}
              demoURL={project.demoURL}
              repoURL={project.repoURL}
              imageURL={project.imageURL}
              alt={project.alt}
              stack={project.stack}
            />
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
          variant="secondary"
        />
      </div>
    </Layout>
  );
};

export default ProjectsPage;

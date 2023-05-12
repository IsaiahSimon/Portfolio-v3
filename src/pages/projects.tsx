import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "~/components/Project";

import { projects } from "~/config";

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2>My Projects</h2>
        {/* Map over your projects and render a ProjectCard for each one */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            demoURL={project.demoURL}
            repoURL={project.repoURL}
          />
        ))}
      </section>
    </Layout>
  );
};

export default ProjectsPage;

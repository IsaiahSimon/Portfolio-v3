import React from "react";
import type { FunctionComponent } from "react";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  demoURL: string;
  repoURL: string;
  // other fields...
}
const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  demoURL,
  repoURL,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={demoURL}>View demo</a>
      <a href={repoURL}>View repo</a>
    </div>
  );
};

export default Project;

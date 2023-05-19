import React from "react";
import type { FunctionComponent } from "react";
import IconGitHub from "./icons/github";
import IconLogo from "./IconLogo";
import Spacer from "./Spacer";

interface FeaturedProjectProps {
  id: number;
  title: string;
  description: string;
  demoURL: string;
  repoURL: string;
  imageURL: string;
  alt: string;
  stack: string[];
  // other fields...
}
const FeaturedProject: FunctionComponent<FeaturedProjectProps> = ({
  title,
  description,
  demoURL,
  repoURL,
  imageURL,
  alt,
  stack,
}) => {
  return (
    <div className="flex flex-col border lg:flex-row">
      <div className="w-full border lg:w-1/2">
        {/* Placeholder for project image */}
        <div className="w-300px h-[300px] bg-red-500" />
        {/* <Image src={imageURL} alt={alt} height={300} width={500} /> */}
      </div>
      <div className="w-full border sm:text-end lg:w-1/2">
        <h3 className="text-base">Featured Project</h3>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="flex flex-wrap justify-center gap-5 border p-2">
          {stack.map((tech) => (
            <li className="font-mono text-accent" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <a href={demoURL} target="_blank" rel="noopener noreferrer">
            <span className="text-3xl">Demo</span>
          </a>
          <Spacer width="12px" />
          <a href={repoURL} target="_blank" rel="noopener noreferrer">
            <span className="text-3xl">Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

import React from "react";
import type { FunctionComponent } from "react";

interface WorkExperienceProps {
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

const WorkExperience: FunctionComponent<WorkExperienceProps> = ({
  companyName,
  role,
  duration,
  description,
}) => {
  return (
    <div>
      <h2>{companyName}</h2>
      <h3>{role}</h3>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
};

export default WorkExperience;

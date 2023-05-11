import React from "react";

interface WorkExperienceCardProps {
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
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

export default WorkExperienceCard;

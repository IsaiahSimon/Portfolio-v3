import React from "react";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  testimonial,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;

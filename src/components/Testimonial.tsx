import React from "react";
import type { FunctionComponent } from "react";

interface TestimonialProps {
  id: number;
  clientName: string;
  testimonial: string;
  // other fields...
}

const Testimonial: FunctionComponent<TestimonialProps> = ({
  clientName,
  testimonial,
}) => {
  return (
    <div>
      <h2>{clientName}</h2>
      <p>&quot;{testimonial}&quot;</p>
    </div>
  );
};

export default Testimonial;

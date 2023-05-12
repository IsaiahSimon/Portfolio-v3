import React from "react";
import type { ReactNode } from "react";

interface SpanGradientProps {
  children: ReactNode;
}

const SpanGradient = ({ children }: SpanGradientProps) => {
  return (
    <span className="bg-gradient-to-r from-[#ed5432] via-[#ed6a32] to-orange-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default SpanGradient;

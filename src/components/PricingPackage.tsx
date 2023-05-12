import React from "react";
import type { FunctionComponent } from "react";

interface PricingPackageProps {
  packageName: string;
  price: number;
  features: string[];
}

const PricingPackage: FunctionComponent<PricingPackageProps> = ({
  packageName,
  price,
  features,
}) => {
  return (
    <div>
      <h2>{packageName}</h2>
      <p>${price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPackage;

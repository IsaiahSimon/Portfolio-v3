import React from "react";

interface PricingPackageCardProps {
  packageName: string;
  price: number;
  features: string[];
}

const PricingPackageCard: React.FC<PricingPackageCardProps> = ({
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

export default PricingPackageCard;

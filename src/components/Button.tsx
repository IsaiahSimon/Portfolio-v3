import Link from "next/link";
import type { FunctionComponent } from "react";

interface ButtonProps {
  label: string;
  href: string;
  rel?: string;
  target?: string;
  variant?: "primary" | "secondary";
  height?: string;
  width?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  href,
  rel,
  target,
  variant = "primary",
  height = "h-[55px]",
  width = "w-[150px]",
}) => {
  const styles = {
    primary: `hover:bg-gradient-to-r from-[#ed5432] via-[#ed6a32] to-orange-400 text-white  border border-accent ${height} ${width} font-mono hover:bg-accent hover:text-white hover:border-backgroundColor `,
    secondary: `hover:bg-gradient-to-r from-gray-600 via-slateDark to-slateLight bg-transparent text-white border border-white ${height} ${width} font-mono hover:bg-white hover:text-white hover:border-backgroundColor`,
  };

  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={`align-center text-md flex items-center justify-center rounded-lg text-center font-medium transition-colors duration-200 ease-in-out ${styles[variant]}`}
    >
      {label}
    </Link>
  );
};

export default Button;

import Link from "next/link";
import type { FunctionComponent } from "react";

interface ButtonProps {
  label: string;
  href: string;
  rel?: string;
  target?: string;
  variant?: "primary" | "secondary";
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  href,
  rel,
  target,
  variant = "primary",
}) => {
  const styles = {
    primary:
      "bg-transparent text-accent border border-accent py-[1.25rem] px-[1.75rem] font-mono hover:bg-accent hover:text-backgroundColor hover:border-backgroundColor",
    secondary:
      "bg-transparent text-white border border-white py-[1.25rem] px-[1.75rem] font-mono hover:bg-white hover:text-backgroundColor hover:border-backgroundColor",
  };

  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={`inline-block min-w-[200px] rounded-lg px-6 py-3 text-center text-sm font-medium transition-colors duration-200 ease-in-out ${styles[variant]}`}
    >
      {label}
    </Link>
  );
};

export default Button;

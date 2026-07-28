import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-orange text-white hover:bg-[#d9741a]"
      : "bg-transparent border border-border text-text-body hover:border-border-lt hover:text-text-primary";

  return (
    <button
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-[13px] font-semibold cursor-pointer whitespace-nowrap transition-colors ${variantClass} ${className}`}
      {...props}
    />
  );
}

import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform hover:scale-105",
    secondary: "bg-gradient-to-r from-secondary to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105",
    outlined: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
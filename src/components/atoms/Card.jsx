import React from "react";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({
  className,
  children,
  variant = "default",
  hover = false,
  ...props
}, ref) => {
  const variants = {
    default: "bg-white border border-gray-200 shadow-md",
    gradient: "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg",
    highlighted: "bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-lg"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-xl hover:scale-105 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
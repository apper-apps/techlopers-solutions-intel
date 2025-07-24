import React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({
  className,
  type = "text",
  label,
  error,
  ...props
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
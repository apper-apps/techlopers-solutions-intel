import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const NavItem = ({ to, children, mobile = false, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "font-medium transition-all duration-300",
          mobile 
            ? "block px-3 py-2 text-base text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg"
            : "px-4 py-2 text-gray-700 hover:text-primary relative",
          isActive && (mobile 
            ? "text-primary bg-primary/10" 
            : "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent"
          )
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
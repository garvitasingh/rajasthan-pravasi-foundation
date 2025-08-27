import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarLink({ to, icon: Icon, children }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        "flex items-center gap-3 rounded-md px-4 py-3 text-[15px] " +
        (isActive
          ? "bg-[#96469C] text-white shadow"
          : "text-gray-700 hover:bg-purple-50")
      } 
    > 
      <Icon className="shrink-0" />
      <span className="truncate">{children}</span>
    </NavLink>
  );
} 

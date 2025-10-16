import React from "react";

 
export default function GradientButton({
  children,
  className = "",
  onClick,
  width,
  height, 
  borderRadius,
  style = {},
}) {
  return (
    <button
      onClick={onClick}
      className={`btn-gradient ${className}`}
      aria-label={typeof children === "string" ? children : "action"}
      type="button"
      style={{
        width: width || "auto",
        height: height || "auto",
        borderRadius: borderRadius || "8px",
        ...style, // Allow full inline style customization
      }}
    >
      {children}
    </button>
  );
}

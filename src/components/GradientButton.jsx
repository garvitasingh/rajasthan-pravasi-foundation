import React from "react";

/**
 * GradientButton.jsx
 * - Reusable gradient button that uses the exact gradient you provided.
 * - Can take custom dimensions, border radius, and extra styling via props.
 * - Keeps gradient style consistent across usages.
 */
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

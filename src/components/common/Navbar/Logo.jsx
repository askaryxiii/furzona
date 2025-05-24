import React from "react";

const Logo = ({ width }) => {
  return (
    <img
      src="/images/logo.webp"
      alt="Furzona Logo"
      className={`min-w-${width}`}
    />
  );
};

export default Logo;

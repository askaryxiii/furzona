import React, { memo } from "react";

const Logo = memo(({ width }) => {
  return (
    <img
      src="/images/logo.webp"
      alt="Furzona Logo"
      className={`min-w-${width}`}
    />
  );
});

export default Logo;

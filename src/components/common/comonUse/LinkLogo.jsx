import React from "react";
import { Link } from "react-router-dom";

const LinkLogo = () => {
  return (
    <Link to={"/"}>
      <img
        src="icon.webp"
        alt="Furzona Logo"
        className="w-20 flex-shrink-0 flex items-center"
      />
    </Link>
  );
};

export default LinkLogo;

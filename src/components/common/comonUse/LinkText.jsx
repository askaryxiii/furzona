import React, { memo } from "react";
import { Link } from "react-router-dom";

const LinkText = memo(({ dist, text }) => {
  return (
    <Link to={dist} className="text-sm underline text-blue-700">
      {text}
    </Link>
  );
});

export default LinkText;

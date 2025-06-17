import { memo } from "react";
import { Link } from "react-router-dom";

const LinkLogo = memo(() => {
  return (
    <Link to={"/"}>
      <img
        src="icon.webp"
        alt="Furzona Logo"
        width={80}
        height={80}
        className="flex-shrink-0 flex items-center"
      />
    </Link>
  );
});

export default LinkLogo;

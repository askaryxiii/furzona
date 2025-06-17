import { memo } from "react";
import { Link } from "react-router-dom";

const ListItemWithIcon = memo(({ icon, title, dist }) => {
  return (
    <Link to={dist} className="flex justify-center items-center gap-1.5 ">
      {icon} <span className="text-base">{title}</span>
    </Link>
  );
});

export default ListItemWithIcon;

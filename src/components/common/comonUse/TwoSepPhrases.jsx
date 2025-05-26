import React, { memo } from "react";
import { Link } from "react-router-dom";

const TwoSepPhrases = memo(({ normalText, linkedText, dist }) => {
  return (
    <span className="flex gap-2">
      {normalText}
      <Link to={dist} className="text-blue-600">
        {linkedText}
      </Link>
    </span>
  );
});

export default TwoSepPhrases;

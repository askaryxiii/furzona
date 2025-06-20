import { memo } from "react";

const LightParagraph = memo(({ text, textSize }) => {
  return <p className={`text-gray-900 ${textSize}`}>{text}</p>;
});

export default LightParagraph;

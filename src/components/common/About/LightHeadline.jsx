import { memo } from "react";

const LightHeadline = memo(({ text }) => {
  return <span className="text-[#2B273F] text-3xl">{text}</span>;
});

export default LightHeadline;

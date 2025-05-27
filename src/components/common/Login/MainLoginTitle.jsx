import { memo } from "react";

const MainLoginTitle = memo(({ title }) => {
  return <span className="text-2xl font-semibold text-[#4a276b]">{title}</span>;
});

export default MainLoginTitle;

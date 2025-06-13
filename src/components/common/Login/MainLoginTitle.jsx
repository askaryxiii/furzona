import { memo } from "react";

const MainLoginTitle = memo(({ title, size }) => {
  return (
    <span className={`${size} font-bold text-[#4a276b]`}>{title}</span>
  );
});

export default MainLoginTitle;

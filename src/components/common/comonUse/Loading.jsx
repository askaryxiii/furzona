import { memo } from "react";
import { BarLoader } from "react-spinners";

const Loading = memo(() => {
  return (
    <div className="flex flex-col gap-10 py-20 items-center w-full h-svh ">
      <img src="./icon.webp" alt="FURZONA" width={150} />
      <BarLoader color="#4a276b" height={4} className="w-1/2" />
    </div>
  );
});
export default Loading;

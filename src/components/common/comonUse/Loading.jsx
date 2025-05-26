import { memo } from "react";
import { BarLoader, BeatLoader, ScaleLoader } from "react-spinners";
import Logo from "../Navbar/Logo";

const Loading = memo(() => {
  return (
    <div className="flex flex-col justify-evenly items-center h-svh ">
      <img src="./icon.webp" alt="FURZONA" />
      <BarLoader color="#4a276b" height={4} width={400} />
    </div>
  );
});
export default Loading;

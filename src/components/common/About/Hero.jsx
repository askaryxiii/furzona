import { memo } from "react";

const Hero = memo(({ height }) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/31519218/pexels-photo-31519218/free-photo-of-charming-cats-on-a-windowsill-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className={`w-full object-cover object-center ${height}`}
      />
    </div>
  );
});

export default Hero;

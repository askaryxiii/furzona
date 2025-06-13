import { memo } from "react";

const Hero = memo(({ height }) => {
  return (
    <div>
      <img
        src="/images/hero.webp"
        className={`w-full object-cover object-center ${height}`}
      />
    </div>
  );
});

export default Hero;

import { memo } from "react";

const heroImages = {
  sm: "/images/hero-640.webp", // 640px wide
  md: "/images/hero-1024.webp", // 1024px wide
  lg: "/images/hero-1920.webp", // 1920px wide
};

const Hero = memo(({ height }) => {
  return (
    <div>
      <picture>
        <source
          srcSet={`${heroImages.sm} 640w, ${heroImages.md} 1024w, ${heroImages.lg} 1920w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          type="image/webp"
        />
        <img
          src={heroImages.md}
          className={`object-cover ${height}`}
          alt="Furzona Hero Banner"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
      </picture>
    </div>
  );
});

export default Hero;

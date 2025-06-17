import { memo } from "react";
import LightHeadline from "./LightHeadline";
import LightParagraph from "./LightParagraph";

const PetCard = memo(({ title, img, paragraph }) => {
  const createOptimizedImg = (url, width) => {
    const urlObj = new URL(url);
    urlObj.searchParams.set("width", width);
    urlObj.searchParams.set("format", "webp");
    urlObj.searchParams.set("quality", "80");
    return urlObj.toString();
  };

  return (
    <div className="border-2 border-gray-200 shadow-lg rounded-4xl px-4 grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-4 justify-center pl-5">
        <LightHeadline text={title} />
        <LightParagraph text={paragraph} textSize={"text-base"} />
      </div>
      <div className="relative aspect-square">
        <img
          src={createOptimizedImg(img, 400)}
          srcSet={`
            ${createOptimizedImg(img, 200)} 200w,
            ${createOptimizedImg(img, 400)} 400w,
            ${createOptimizedImg(img, 600)} 600w
          `}
          sizes="(max-width: 768px) 200px, 400px"
          alt={`Illustration for ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
});

export default PetCard;

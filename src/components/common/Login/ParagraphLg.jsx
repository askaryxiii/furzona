import { memo } from "react";

const ParagraphLg = memo(({ text }) => {
  return (
    <p className=" text-lg font-normal w-full text-gray-800 text-center">
      {text}
    </p>
  );
});

export default ParagraphLg;

import LightHeadline from "./LightHeadline";
import LightParagraph from "./LightParagraph";

const PetCard = ({ title, img, paragraph }) => {
  return (
    <div className="border-2 border-gray-200 shadow-lg rounded-4xl px-4 grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-4 justify-center pl-5">
        <LightHeadline text={title} />
        <LightParagraph text={paragraph} textSize={"text-base"} />
      </div>
      <img src={img} alt="services" className="h-full w-full" />
    </div>
  );
};

export default PetCard;

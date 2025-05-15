import React from "react";

const RoundedPurpleButton = ({ text, type }) => {
  return (
    <button className={`bg-[#4a276b] text-white py-3 rounded-full`} type={type}>
      {text}
    </button>
  );
};

export default RoundedPurpleButton;

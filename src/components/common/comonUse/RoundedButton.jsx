import React from "react";

const RoundedButton = ({ text, color, textColor, type }) => {
  return (
    <button
      className={`bg-[${color}] text-${textColor} py-3 rounded-full`}
      type={type}>
      {text}
    </button>
  );
};

export default RoundedButton;

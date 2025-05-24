import React from "react";
import Logo from "../common/Navbar/Logo";
import ParagraphLg from "../common/Login/ParagraphLg";
import MainLoginTitle from "../common/Login/MainLoginTitle";
import RegisterFormComponent from "../common/Register/RegisterFormComponent";

const RegisterSection = () => {
  return (
    <div className="flex flex-col gap-4 border-2 px-24 py-8 items-center border-gray-200 w-2xl h-full md:h-fit">
      <Logo width={"sm"} />
      <ParagraphLg
        text={
          "Users registered can post a pet for adoption, and contact owners to adopt an pet, Make a differance and adopt needed pet"
        }
      />
      <MainLoginTitle title={"JOIN FURZONA"} />
      <RegisterFormComponent />
    </div>
  );
};

export default RegisterSection;
